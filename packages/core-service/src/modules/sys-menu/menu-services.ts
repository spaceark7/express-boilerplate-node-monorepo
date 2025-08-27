import prismaClient from "packages/core-service/src/app/config/database";
import type { TSysMenu, TSysMenuCreate, TSysMenuDTO, TSysMenuUpdate } from "packages/core-service/src/modules/sys-menu/menu-models";
import { MenuValidation } from "packages/core-service/src/modules/sys-menu/menu-validation";
import { HTTP_METHOD, ResponseError, Validation } from "shared";
import type { IUserJWTPayload } from "shared/src/types/types";

export class MenuService {

  private user?: IUserJWTPayload | undefined;

  constructor(user?: IUserJWTPayload) {
    this.user = user;
  }

  private getMenuInclude(depth: number = 3): any {
    if (depth <= 0) {
      return {
        groups: {
          include: {
            group: true,
            access: {
              include: {
                accessLevel: true
              }
            }
          }
        },
        acls: {
          include: {
            accessLevel: true
          }
        }
      };
    }

    return {
      children: {
        where: {
          deletedAt: null
        },
        orderBy: {
          name: 'asc'
        },
        include: depth > 1 ? this.getMenuInclude(depth - 1) : {}
      },
      groups: {
        include: {
          group: true,
          access: {
            include: {
              accessLevel: true
            }
          }
        }
      },
      acls: {
        include: {
          accessLevel: true
        }
      }
    };
  }

  /**
 * Transform menu data structure for a specific group
 * @param menus The menus to transform
 * @param groupId The group ID to extract isActive status
 * @returns Transformed menu structure
 */
  private transformMenusForGroup(menus: any[], groupId: number, includeChild = false) {
    console.log('Transforming menus for group:', groupId);
    return menus.map(menu => {
      // Find the specific group entry for this menu to get isActive status
      console.log('Finding group entry for menu:', {
        name: menu.name,
        groups: menu.groups
      });
      let groupEntry;
      if (menu.groups) {
        groupEntry = menu.groups.find((g: any) => g.groupId === groupId);
      }

      // Extract access levels from the group-specific access entries
      const accessLevels = groupEntry?.access?.map((access: any) => access.accessLevel.code) || [];

      // Create a new transformed menu object
      const transformedMenu: TSysMenuDTO = {
        id: menu.id,
        parentId: menu.parentId,
        description: menu.description,
        name: menu.name,
        label: menu.label,
        icon: menu.icon,
        path: menu.path,
        createdAt: menu.createdAt,
        updatedAt: menu.updatedAt,
        // deletedAt: menu.deletedAt,
        // deletedBy: menu.deletedBy,
        orderNumber: groupEntry ? groupEntry?.orderNumber : undefined,
        isActive: groupEntry ? groupEntry.isActive : false,
        acls: accessLevels,
        // Transform children recursively if they exist
        children: includeChild && menu.children && menu.children.length > 0
          ? this.transformMenusForGroup(menu.children, groupId, includeChild)
          : undefined
      };


      return transformedMenu;
    }).sort((a, b) => (a.orderNumber || 0) - (b.orderNumber || 0));
  }

  static async checkUserGroupPermissions(user: IUserJWTPayload, path: string, method: keyof typeof HTTP_METHOD) {
    console.log('checkUserGroupPermissions', { user, path, method });
    // Implement your permission checking logic here
    const menuService = new MenuService();
    const menus = await menuService.findMenusByGroupId(user.groupId, false);

    const isAdmin = await prismaClient.group.findFirst({
      where: {
        id: user.groupId,
        name: {
          contains: 'Admin',
          mode: 'insensitive'
        }
      }
    })

    if (isAdmin) {
      return true;
    }


    if (!menus || menus.length === 0) {

      throw new ResponseError(404, 'Menus not found');
    }

    const getRequiredPermission = (httpMethod: keyof typeof HTTP_METHOD): string => {
      switch (httpMethod) {
        case 'GET': return 'READ';
        case 'POST': return 'CREATE';
        case 'PUT': return 'UPDATE';
        case 'DELETE': return 'DELETE';
        default: return 'READ';
      }
    };
    const allMenu = await prismaClient.menu.findMany({
      select: {
        name: true
      }
    });
    const permissionMapping = allMenu.reduce((acc: Record<string, string>, menu) => {
      acc[`/${menu.name.toLocaleLowerCase()}`] = menu.name.toLocaleLowerCase();
      return acc;
    }, {});

    console.log('Permission Mapping:', permissionMapping);

    let requiredPermissionKey = null;
    for (const [pattern, permKey] of Object.entries(permissionMapping)) {
      // Simple pattern matching for this example - you might want a more robust solution
      if (path.startsWith(pattern)) {
        requiredPermissionKey = permKey;
        break;
      }
    }

    console.log(`Required permission for ${path} [${method}]: ${requiredPermissionKey}`);

    if (!requiredPermissionKey) {

      return false;
    }

    const menuWithPermission = menus.find(menu => menu.name.toLowerCase() === requiredPermissionKey);
    console.log(`Menu with permission for ${path} [${method}]:`, menuWithPermission);
    if (!menuWithPermission) {

      return false;
    }

    // Get the required permission based on the HTTP method
    const requiredPermission = getRequiredPermission(method);
    // Check if the user's group has the required permission for this menu
    if (requiredPermission === 'READ') {
      // Implement your logic for READ permission
      console.log(`User Group ${user.groupId} has required permission for ${path} [${method}]:`, menuWithPermission.isActive);

      return menuWithPermission.isActive
    } else {
      const hasRequiredPermission = menuWithPermission.acls.includes(requiredPermission);
      console.log(`User Group ${user.groupId} has required permission for ${path} [${method}]:`, hasRequiredPermission);
      return hasRequiredPermission;
    }
  }

  async create(menuData: TSysMenuCreate) {
    const { isActive, acls, ...requestData } = await Validation.validate(MenuValidation.MENU_CREATE_SCHEMA, menuData);
    const groupId = this.user?.groupId;
    const isExist = await prismaClient.menu.count({
      where: {
        OR: [
          { name: requestData.name },
          { path: requestData.path }
        ]
      }
    });

    if (isExist) {
      throw new ResponseError(400, "Menu already exists with this name or path");
    }

    const newMenu = await prismaClient.$transaction(async (tx) => {
      // 1. Create the new menu
      const newMenu = await tx.menu.create({
        data: requestData
      });

      // 2. Get all active groups
      const activeGroups = await tx.group.findMany({
        where: {
          deletedAt: null
        },
        select: {
          id: true
        }
      });

      // 3. Create MenuGroup entries for each group with isActive=false by default
      if (activeGroups.length > 0) {
        const groupMenuData = await Promise.all(activeGroups.map(async group => {
          let nextOrderNumber = 0;

          if (requestData.parentId === null) {
            // For parent menus: Find highest orderNumber among parent menus for this specific group
            const highestOrderParent = await tx.menuGroup.findFirst({
              where: {
                groupId: group.id,
                menu: {
                  parentId: null,
                  deletedAt: null
                }
              },
              orderBy: {
                orderNumber: 'desc'
              },
              select: {
                orderNumber: true
              }
            });

            nextOrderNumber = (highestOrderParent?.orderNumber || 0) + 10;
          } else {
            // For child menus: Find highest orderNumber among siblings for this specific group
            const highestOrderSibling = await tx.menuGroup.findFirst({
              where: {
                groupId: group.id,
                menu: {
                  parentId: requestData.parentId,
                  deletedAt: null
                }
              },
              orderBy: {
                orderNumber: 'desc'
              },
              select: {
                orderNumber: true
              }
            });

            nextOrderNumber = (highestOrderSibling?.orderNumber || 0) + 10;
          }

          return {
            menuId: newMenu.id,
            groupId: group.id,
            isActive: groupId && group.id === groupId && isActive !== undefined ? isActive : false,
            orderNumber: nextOrderNumber
          };
        }));

        console.log('Group menu data:', groupMenuData);

        await tx.menuGroup.createMany({
          data: groupMenuData
        });
      }

      // 4. If acls array is provided and a specific groupId is provided, set up access levels
      if (acls !== undefined && Array.isArray(acls) && acls.length > 0 && groupId !== undefined) {
        // Find the target group
        const targetGroup = activeGroups.find(g => g.id === groupId);

        if (targetGroup) {
          // Find the MenuGroup entry we just created
          const menuGroup = await tx.menuGroup.findFirst({
            where: {
              menuId: newMenu.id,
              groupId: targetGroup.id
            }
          });

          if (menuGroup) {
            // Create or find access levels for each code and create the access entries
            for (const aclCode of acls) {
              // Try to find the access level
              let accessLevel = await tx.accessLevel.findFirst({
                where: {
                  code: {
                    equals: aclCode,
                    mode: 'insensitive' // Case insensitive matching
                  }
                }
              });

              // If not found, create it
              if (!accessLevel) {
                // Convert to uppercase for consistency
                const upperCode = aclCode.toUpperCase();
                accessLevel = await tx.accessLevel.create({
                  data: {
                    code: upperCode,
                    description: `Access level for ${upperCode}`
                  }
                });
              }

              // Create the access entry
              await tx.menuGroupAccess.create({
                data: {
                  menuGroupId: menuGroup.id,
                  accessLevelId: accessLevel.id
                }
              });
            }
          }
        }
      }

      // 5. Fetch the complete menu with its group associations
      const menuWithGroups = await tx.menu.findUnique({
        where: { id: newMenu.id },
        include: this.getMenuInclude(0)
      });

      console.log('Fetched menu with groups:', menuWithGroups);

      // 6. If a specific groupId is provided, transform the result to match the expected format
      return groupId !== undefined
        ? this.transformMenusForGroup([menuWithGroups], groupId)[0]
        : menuWithGroups;
    });

    return newMenu;
  }
  // Temporary findMany method, it will process reqParams later
  async findMany() {
    const menus = await prismaClient.menu.findMany({
      where: {
        deletedAt: null,
        parentId: null

      },
      orderBy: {
        name: 'asc'
      },
      include: {
        parent: {
          select: {
            id: true,
            name: true,
            label: true
          }
        },
        children: {
          where: {
            deletedAt: null
          },
          orderBy: {
            name: 'asc'
          },

          include: {
            groups: {
              include: {
                group: true
              }
            },
            children: {
              where: {
                deletedAt: null
              },
              orderBy: {
                name: 'asc'
              },
              include: {
                groups: {
                  include: {
                    group: true
                  }
                },
                acls: {
                  include: {
                    accessLevel: true
                  }
                }
              }
            }
          }
        },
        groups: {
          include: {
            group: true
          }
        },
        acls: {
          include: {
            accessLevel: true
          }
        }
      }
    });

    if (!this.user?.groupId)
      throw new ResponseError(403, "Forbidden");

    const transformedMenu = this.transformMenusForGroup(menus, this.user?.groupId, true);

    return transformedMenu;
  }
  // Temporary findById method, it will process reqParams later
  //  async findById(menuId: number) {
  //   // Get menu by ID logic here
  //   const menu = await prismaClient.menu.findUnique({
  //     where: {
  //       id: menuId,
  //       deletedAt: null
  //     },
  //     include: {
  //       parent: true,
  //       children: {
  //         where: {
  //           deletedAt: null
  //         }
  //       },
  //       groups: {
  //         include: {
  //           group: true,
  //           access: {
  //             include: {
  //               accessLevel: true
  //             }
  //           }
  //         }
  //       },
  //       acls: {
  //         include: {
  //           accessLevel: true
  //         }
  //       }
  //     }
  //   });

  //   if (!menu) {
  //     throw new ResponseError(404, "Menu not found");
  //   }

  //   // Transform the menu data if needed
  //   const transformedMenu = {
  //     id: menu.id,
  //     name: menu.name,
  //     label: menu.label,
  //     path: menu.path,
  //     isActive: menu.groups.some((g: any) => g.isActive),
  //     description: menu.description,
  //     icon: menu.icon,
  //     createdAt: menu.createdAt,
  //     updatedAt: menu.updatedAt,
  //     parent: menu.parent,
  //     children: menu.children,
  //     groups: menu.groups,
  //     acls: menu.acls
  //   }

  //   console.log(transformedMenu);
  //   return menu;
  // }
  async findById(menuId: number) {
    console.log('MenuService:CurrentUser', this.user)
    // Get menu by ID logic here
    const menu = await prismaClient.menu.findUnique({
      where: {
        id: menuId,
        deletedAt: null
      },
      include: {
        parent: true,
        groups: {
          include: {
            group: true,
            access: {
              include: {
                accessLevel: true
              }
            }
          }
        },
        acls: {
          include: {
            accessLevel: true
          }
        }
      }
    });

    if (!menu) {
      throw new ResponseError(404, "Menu not found");
    }

    // Transform the menu data if needed
    // const transformedMenu = {
    //   id: menu.id,
    //   name: menu.name,
    //   label: menu.label,
    //   path: menu.path,
    //   isActive: menu.groups.find((i) => i.groupId === this.user?.groupId)?.isActive,
    //   description: menu.description,
    //   icon: menu.icon,
    //   createdAt: menu.createdAt,
    //   updatedAt: menu.updatedAt,
    //   parent: menu.parent,
    //   acls: menu.acls
    // }
    if (!this.user?.groupId) {
      throw new ResponseError(403, "Forbidden");
    }
    const transformedMenu = this.transformMenusForGroup([menu], this.user?.groupId, false);

    return transformedMenu;
  }

  /**
 * Find menus associated with a specific group and transform output
 * @param groupId The ID of the group
 * @param includeInactive Whether to include inactive menus (default: true)
 * @param rootMenusOnly Whether to return only root (top-level) menus (default: true)
 * @returns Transformed menus associated with the specified group
 */
  async findMenusByGroupId(
    groupId: number,
    rootMenusOnly: boolean = true
  ) {
    // Validate group exists
    const group = await prismaClient.group.findUnique({
      where: {
        id: groupId,
        deletedAt: null
      }
    });

    if (!group) {
      throw new ResponseError(404, "Group not found");
    }

    // Base where condition
    const whereCondition: any = {
      deletedAt: null,
      groups: {
        some: {
          groupId
        }
      }
    };

    // If rootMenusOnly is true, only get menus with no parent
    if (rootMenusOnly) {
      whereCondition.parentId = null;
    }

    // Fetch menus for the specified group
    const menus = await prismaClient.menu.findMany({
      where: whereCondition,
      orderBy: {
        name: 'asc'
      },
      include: this.getMenuInclude()
    });

    // Transform the menus to the desired format
    const transformedMenus = this.transformMenusForGroup(menus, groupId, true);

    return transformedMenus;
  }

  async updateOne(groupId: number, menuData: TSysMenuUpdate) {
    const requestData = await MenuValidation.MENU_UPDATE_SCHEMA.validate(menuData);
    const { id: menuId } = requestData;
    // Check if menu exists
    const menu = await prismaClient.menu.findUnique({
      where: {
        id: menuId,
        deletedAt: null
      }
    });

    if (!menu) {
      throw new ResponseError(404, "Menu not found");
    }

    // Check if group exists
    const group = await prismaClient.group.findUnique({
      where: {
        id: groupId,
        deletedAt: null
      }
    });

    if (!group) {
      throw new ResponseError(404, "Group not found");
    }

    // Extract fields
    const {
      isActive,
      acls,
      orderNumber,
      ...basicMenuData
    } = requestData;

    const result = await prismaClient.$transaction(async (tx) => {
      // 1. Update basic menu properties if there are any
      if (Object.keys(basicMenuData).length > 0) {
        // If there's a name or path change, check for duplicates
        if (basicMenuData.name || basicMenuData.path) {
          const duplicateCheck = await tx.menu.findFirst({
            where: {
              id: { not: menuId },
              deletedAt: null,
              OR: [
                basicMenuData.name ? { name: basicMenuData.name } : {},
                basicMenuData.path ? { path: basicMenuData.path } : {}
              ]
            }
          });

          if (duplicateCheck) {
            throw new ResponseError(400, "Menu with this name or path already exists");
          }
        }

        // Update basic menu properties
        await tx.menu.update({
          where: { id: menuId },
          data: basicMenuData as any
        });
      }

      // 2. Find or create the MenuGroup entry and update isActive if needed
      let menuGroup = await tx.menuGroup.findFirst({
        where: {
          menuId,
          groupId
        }
      });

      if (!menuGroup) {
        // Create the menu-group relationship if it doesn't exist
        menuGroup = await tx.menuGroup.create({
          data: {
            menuId,
            groupId,
            isActive: isActive && isActive !== undefined ? isActive : false,
            orderNumber: orderNumber && orderNumber !== undefined ? orderNumber : 0
          }
        });
      } else if (isActive !== undefined) {
        // Update the existing menu-group
        await tx.menuGroup.update({
          where: { id: menuGroup.id },
          data: {
            isActive: isActive ? isActive : false,
            orderNumber: orderNumber && orderNumber !== undefined ? orderNumber : 0
          }
        });
      }

      // 3. Update access levels if provided using a simpler approach
      if (acls !== undefined && Array.isArray(acls)) {
        // First, remove all existing access entries for this menu-group
        await tx.menuGroupAccess.deleteMany({
          where: {
            menuGroupId: menuGroup.id
          }
        });

        // Then, create access entries for each provided code
        if (acls.length > 0) {
          // Create or find access levels for each code
          for (const aclCode of acls) {
            if (aclCode) {


              // Try to find the access level
              let accessLevel = await tx.accessLevel.findFirst({
                where: {
                  code: {
                    equals: aclCode,
                    mode: 'insensitive' // Case insensitive matching
                  }
                }
              });

              // If not found, create it
              if (!accessLevel) {
                // Convert to uppercase for consistency
                const upperCode = aclCode.toUpperCase();
                accessLevel = await tx.accessLevel.create({
                  data: {
                    code: upperCode,
                    description: `Access level for ${upperCode}`
                  }
                });
              }

              // Create the access entry
              await tx.menuGroupAccess.create({
                data: {
                  menuGroupId: menuGroup.id,
                  accessLevelId: accessLevel.id
                }
              });
            }
          }
        }
      }

      // 4. Get the updated menu with all its relationships
      const updatedMenu = await tx.menu.findUnique({
        where: { id: menuId },
        include: this.getMenuInclude()
      });

      console.log(`${MenuService.name}:${this.updateOne.name}:transaction:`, updatedMenu, groupId);

      // 5. Transform to desired format
      return this.transformMenusForGroup([updatedMenu], groupId)[0];
    });
    console.log(`${MenuService.name}:${this.updateOne.name}`, result);
    return result;
  }

  async deleteOne(menuId: number) {
    // Delete menu logic here
  }
}
