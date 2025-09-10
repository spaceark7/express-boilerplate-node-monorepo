import type { Request } from "express";
import prismaClient from "packages/core-service/src/app/config/database";
import type { TSysMenuAclsUpdate } from "packages/core-service/src/modules/sys-menu-acls/menu-acls-models";
import { MenuAclsValidations } from "packages/core-service/src/modules/sys-menu-acls/menu-acls-validations";
import type { TSysMenuDTO } from "packages/core-service/src/modules/sys-menu/menu-models";
import { ResponseError, Validation, type IBaseServiceCrud } from "shared";
import type { IUserJWTPayload } from "shared/src/types/types";

export class MenuAclsService implements IBaseServiceCrud {

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
          orderNumber: 'desc'
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

  //#region CRUD Operations
  async findMany(
    params: Request['params'],
    rootMenusOnly: boolean = true
  ) {
    const { groupId } = params;
    if (!groupId) {
      throw new ResponseError(400, "Group ID is required");
    }

    const groupIdNum = Number(groupId);
    if (isNaN(groupIdNum) || groupIdNum <= 0) {
      throw new ResponseError(400, "Invalid Group ID");
    }
    // Validate group exists
    const group = await prismaClient.group.findUnique({
      where: {
        id: groupIdNum,
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
          groupId: groupIdNum
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
    const transformedMenus = this.transformMenusForGroup(menus, groupIdNum, true);

    return transformedMenus;
  }

  async updateMenuAcls(groupId: number, menuId: number, data: TSysMenuAclsUpdate) {
    const requestData = await Validation.validate(MenuAclsValidations.MENU_ACLS_UPDATE_SCHEMA, data);
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

    // Validate menu exists
    const menu = await prismaClient.menu.findUnique({
      where: {
        id: menuId,
        deletedAt: null
      }
    });

    if (!menu) {
      throw new ResponseError(404, "Menu not found");
    }

    // Find menu-group entry
    let menuGroup = await prismaClient.menuGroup.findUnique({
      where: {
        groupId_menuId: {
          groupId,
          menuId
        }
      }
    });

    if (!menuGroup) {
      throw new ResponseError(404, "Menu-Group association not found");
    }
    if (requestData.accessLevels !== undefined && Array.isArray(requestData.accessLevels)) {
      if (requestData.accessLevels.length === 0) {
        await prismaClient.menuGroupAccess.deleteMany({
          where: {
            menuGroupId: menuGroup!.id
          }
        })
      } else {
        const normalizedCodes = requestData.accessLevels.map(code => code.toUpperCase());
        if (!menuGroup.isActive) {
          throw new ResponseError(400, "Cannot set access levels for an inactive menu-group association. Activate it first.");
        }
        // Fetch menu's available access levels
        const menuAccessLevels = await prismaClient.menuAccessLevel.findMany({
          where: {
            menuId,
          },
          select: {
            accessLevelId: true,
            accessLevel: {
              select: {
                id: true,
                code: true
              }
            }
          }
        });

        // Check if all requested access levels are in menu.acls
        const availableCodes = menuAccessLevels.map(ma => ma.accessLevel.code.toUpperCase());
        const invalidCodes = normalizedCodes.filter(code => !availableCodes.includes(code));
        console.log({ normalizedCodes, availableCodes, invalidCodes });
        if (invalidCodes.length > 0) {
          throw new ResponseError(400, `Access levels not available for this menu: ${invalidCodes.join(", ")}`);
        }

        // Map from normalized codes to access level IDs in one step
        const validAccessLevelIds = menuAccessLevels
          .filter(ma => normalizedCodes.includes(ma.accessLevel.code.toUpperCase()))
          .map(ma => ma.accessLevel.id);
        // Create new access entries
        const newAccessEntries = validAccessLevelIds.map(accessLevelId => ({
          menuGroupId: menuGroup!.id,
          accessLevelId
        }));

        if (newAccessEntries.length > 0) {
          await prismaClient.$transaction([
            prismaClient.menuGroupAccess.deleteMany({
              where: {
                menuGroupId: menuGroup!.id
              }
            }),
            prismaClient.menuGroupAccess.createMany({
              data: newAccessEntries
            })
          ]);
        }
      }
    }
    if (requestData.isActive !== undefined) {
      // Update isActive status
      menuGroup = await prismaClient.menuGroup.update({
        where: {
          id: menuGroup.id
        },
        data: {
          isActive: requestData.isActive
        }
      });
    }
    // Fetch updated menu with all its group associations for consistent return format
    const updatedMenu = await prismaClient.menu.findUnique({
      where: { id: menuId },
      include: this.getMenuInclude(0)
    });

    // Return transformed menu for consistent API
    return this.transformMenusForGroup([updatedMenu], groupId)[0];
  }
  //#endregion CRUD Operations
}