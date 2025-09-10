import prismaClient from "packages/core-service/src/app/config/database";
import type { Prisma, PrismaClient } from "packages/core-service/src/generated/prisma";
import type { DefaultArgs } from "packages/core-service/src/generated/prisma/runtime/library";
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
    return menus.map(menu => {
      // Find the specific group entry for this menu to get isActive status
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
        orderNumber: menu.orderNumber,
        isActive: groupEntry ? groupEntry.isActive : false,
        actions: menu.acls?.map((acl: any) => acl.accessLevel.code) || [],
        acls: accessLevels,
        // Transform children recursively if they exist
        children: includeChild && menu.children && menu.children.length > 0
          ? this.transformMenusForGroup(menu.children, groupId, includeChild)
          : undefined
      };


      return transformedMenu;
    }).sort((a, b) => (a.orderNumber || 0) - (b.orderNumber || 0));
  }

  /**
 * Recursively get all descendant menu IDs (children, grandchildren, etc.)
 * @param tx The transaction object
 * @param menuId The parent menu ID
 * @returns Array of all descendant menu IDs
 */
  private async getAllDescendantMenuIds(tx: Omit<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, "$connect" | "$disconnect" | "$on" | "$transaction" | "$extends">, menuId: number): Promise<number[]> {
    const directChildren = await tx.menu.findMany({
      where: {
        parentId: menuId,
        deletedAt: null
      },
      select: {
        id: true
      }
    });

    if (directChildren.length === 0) {
      return [];
    }

    const childIds = directChildren.map(child => child.id);
    let allDescendantIds = [...childIds];

    // Recursively get descendants for each direct child
    for (const childId of childIds) {
      const descendants = await this.getAllDescendantMenuIds(tx, childId);
      allDescendantIds = [...allDescendantIds, ...descendants];
    }

    return allDescendantIds;
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
      const hasRequiredPermission = menuWithPermission.actions.includes(requiredPermission);
      console.log(`User Group ${user.groupId} has required permission for ${path} [${method}]:`, hasRequiredPermission);
      return hasRequiredPermission;
    }
  }


  async create(menuData: TSysMenuCreate) {
    const { isActive, acls, orderNumber, ...requestData } = await Validation.validate(MenuValidation.MENU_CREATE_SCHEMA, menuData);
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

    const result = await prismaClient.$transaction(async (tx) => {
      // 1. Create the new menu
      // check if order number is already used
      if (orderNumber !== null && orderNumber !== undefined) {
        const isOrderNumberUsed = await tx.menu.findFirst({
          where: {
            orderNumber: orderNumber,
            parentId: requestData.parentId,
            deletedAt: null
          }
        });

        if (isOrderNumberUsed) {
          throw new ResponseError(400, "Order number is already used");
        }
      }
      // If parentId is provided, check if parent menu exists
      if (requestData.parentId) {
        const isParentExist = await tx.menu.findFirst({
          where: {
            id: requestData.parentId,
            deletedAt: null
          }
        });
        if (!isParentExist) {
          throw new ResponseError(400, "Parent menu not found");
        }
      }

      const whereCondition: any = {
        deletedAt: null,
      };

      if (requestData.parentId) {
        whereCondition.id = requestData.parentId;
      } else {
        whereCondition.parentId = null;
      }

      // Find last menu order number
      const lastMenu = await tx.menu.findFirst({
        where: whereCondition,
        orderBy: {
          orderNumber: 'desc'
        },
        include: {
          children: true
        }
      });
      console.log('Last menu under parent:', lastMenu);

      let newOrderNumber = 1;

      if (requestData.parentId) {
        const childs = lastMenu?.children || [];
        console.log('Child menus under parent:', childs);
        if (childs.length > 0) {
          newOrderNumber = (Math.max(...childs.map(c => c.orderNumber || 0)) || 0) + 1;
          console.log('Calculated new order number under parent:', newOrderNumber);
        }
      } else {
        if (lastMenu && lastMenu.orderNumber) {
          newOrderNumber = lastMenu.orderNumber + 1;
        }
      }


      console.log('Last menu order number:', lastMenu?.orderNumber);

      const newMenu = await tx.menu.create({
        data: {
          ...requestData,
          orderNumber: orderNumber && orderNumber !== undefined ? orderNumber : newOrderNumber
        }
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
        await tx.menuGroup.createMany({
          data: activeGroups.map(g => ({
            menuId: newMenu.id,
            groupId: g.id,
            isActive: isActive ? isActive : false,
          }))
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
            const normalizedAcls = acls.map(code => code.toUpperCase());

            // 1. Find all existing access levels in a single query
            const existingAccessLevels = await tx.accessLevel.findMany({
              where: {
                code: {
                  in: normalizedAcls,
                  mode: 'insensitive'
                }
              }
            });

            // 2. Determine which access levels need to be created
            const existingCodes = new Set(existingAccessLevels.map(level => level.code.toUpperCase()));
            const codesToCreate = normalizedAcls.filter(code => !existingCodes.has(code));

            // 3. Create missing access levels in bulk
            let newAccessLevels: any[] = [];
            if (codesToCreate.length > 0) {
              newAccessLevels = await tx.accessLevel.createManyAndReturn({
                data: codesToCreate.map(code => ({
                  code,
                  description: `Access level for ${code}`
                })),
                select: { id: true, code: true, description: true },
                skipDuplicates: true
              });

              console.log('Created new access levels:', newAccessLevels);

              // Fetch the newly created levels to get their IDs
              const createdLevels = await tx.accessLevel.findMany({
                where: {
                  code: {
                    in: codesToCreate,
                  }
                }
              });

              // Combine with existing levels
              existingAccessLevels.push(...createdLevels);
            }

            // 4. Create MenuAccessLevel entries in bulk
            await tx.menuAccessLevel.createMany({
              data: existingAccessLevels.map(level => ({
                menuId: newMenu.id,
                accessLevelId: level.id
              })),
              skipDuplicates: true
            });

            // 5. Create MenuGroupAccess entries in bulk
            // await tx.menuGroupAccess.createMany({
            //   data: existingAccessLevels.map(level => ({
            //     menuGroupId: menuGroup.id,
            //     accessLevelId: level.id
            //   })),
            //   skipDuplicates: true
            // });
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

    return result;
  }
  // Temporary findMany method, it will process reqParams later
  async findMany() {
    const menus = await prismaClient.menu.findMany({
      where: {
        deletedAt: null,
        parentId: null

      },
      orderBy: {
        orderNumber: 'desc'
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
            orderNumber: 'desc'
          },
          include: {
            groups: {
              include: {
                group: true,
                access: {
                  select: {
                    accessLevel: true
                  }
                }
              }
            },
            children: {
              where: {
                deletedAt: null
              },
              orderBy: {
                orderNumber: 'desc'
              },

              include: {
                groups: {
                  include: {
                    group: true,
                    access: {
                      select: {
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
            }
          }
        },
        groups: {
          include: {
            group: true,
            access: {
              select: {
                accessLevel: {
                  select: {
                    code: true
                  }
                }
              },

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
    //TODO: send all data structure for re ordering, re ordering happens in frontend
    const requestData = await MenuValidation.MENU_UPDATE_SCHEMA.validate(menuData);
    console.log(`${MenuService.name}:${this.updateOne.name}:requestData`, requestData);
    const { id: menuId } = requestData;
    // Check if menu exists
    const menu = await prismaClient.menu.findUnique({
      where: {
        id: menuId,
        parentId: requestData.parentId || null,
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

      console.log(`${MenuService.name}:${this.updateOne.name}:transaction:menuGroup`, { menuGroup });

      if (!menuGroup) {
        // Create the menu-group relationship if it doesn't exist
        menuGroup = await tx.menuGroup.create({
          data: {
            menuId,
            groupId,
            isActive: isActive && isActive !== undefined ? isActive : false,
          }
        });
      } else if (isActive !== undefined) {
        // Update the existing menu-group
        await tx.menuGroup.update({
          where: { id: menuGroup.id },
          data: {
            isActive: isActive ? isActive : false,
          }
        });
      }

      // 3. Update access levels if provided using a simpler approach
      if (acls !== undefined && Array.isArray(acls)) {
        // First, remove all existing access entries for this menu-group
        await tx.menuAccessLevel.deleteMany({
          where: {
            menuId
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
                    equals: aclCode.toUpperCase(),
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
              await tx.menuAccessLevel.create({
                data: {
                  menuId: menuId,
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
      console.log(`${MenuService.name}:${this.updateOne.name}:transaction:updatedMenu`, { updatedMenu });

      // 5. Transform to desired format
      return this.transformMenusForGroup([updatedMenu], groupId)[0];
    });
    console.log(`${MenuService.name}:${this.updateOne.name}:result`, result);
    return result;
  }

  async deleteOne(menuId: number) {
    return await prismaClient.$transaction(async (tx) => {
      const menu = await tx.menu.findUnique({
        where: {
          id: menuId,
          deletedAt: null
        }
      });

      if (!menu) {
        throw new ResponseError(404, "Menu not found");
      }
      // Soft delete the menu
      const deletedMenu = await tx.menu.update({
        where: { id: menuId },
        data: {
          name: `${menu.name}_deleted_${Date.now()}`,
          path: `${menu.path}_deleted_${Date.now()}`,
          deletedAt: new Date(),
          deletedBy: this.user?.email || 'system',
          orderNumber: null
        },
        include: {
          children: true
        }
      });

      if (deletedMenu.parentId) {
        // Reorder sibling menus
        const siblingMenus = await tx.menu.findMany({
          where: {
            parentId: deletedMenu.parentId,
            deletedAt: null
          },
          orderBy: {
            orderNumber: 'asc'
          },
          select: {
            id: true,
            orderNumber: true
          }
        });

        if (siblingMenus.length > 0) {
          console.log('Sibling menus before reordering:', siblingMenus);
          // Reorder sibling menus
          await tx.menu.updateMany({
            where: {
              parentId: deletedMenu.parentId, deletedAt: null,
              orderNumber: { gt: deletedMenu.orderNumber || 0 }
            },
            data: {
              orderNumber: {
                increment: -1
              }
            }
          });
        }
        console.log('Sibling menus after reordering:', siblingMenus);
      }

      if (deletedMenu.children && deletedMenu.children.length > 0) {
        // Soft delete all child menus
        // Get all descendant menus (children, grandchildren, etc.)
        const allDescendantIds = await this.getAllDescendantMenuIds(tx, deletedMenu.id);
        console.log('All descendant menu IDs to be deleted:', allDescendantIds);

        if (allDescendantIds.length > 0) {
          const deletedMenus = await tx.menu.updateManyAndReturn({
            where: {
              id: {
                in: allDescendantIds
              },
              deletedAt: null
            },
            data: {
              deletedAt: new Date(),
              deletedBy: this.user?.email || 'system',
              orderNumber: null
            }
          });
          console.log('Deleted descendant menus:', deletedMenus);
          // Perform any additional actions with deletedMenus if needed
          if (deletedMenus.length) {
            await tx.menu.updateMany({
              where: {
                id: {
                  in: deletedMenus.map(m => m.id)
                }
              },
              data: {
                name: `deleted_${Date.now()}`,
                path: `deleted_${Date.now()}`,
                deletedAt: new Date(),
                deletedBy: this.user?.email || 'system',
                orderNumber: null
              }
            });
          }

        }

      }

      return `${menu.name} Menu deleted successfully`;
    }
    )
  }

  async deleteMany(menuIds: number[]) {
    // Delete multiple menus logic here
    const deletedMenus = await prismaClient.menu.updateManyAndReturn({
      where: {
        id: {
          in: menuIds
        },
        deletedAt: null
      },
      data: {
        deletedAt: new Date(),
        deletedBy: this.user?.email || 'system'
      }
    });

    return deletedMenus.map(menu => `${menu.name} Menu deleted successfully`);
  }
}
