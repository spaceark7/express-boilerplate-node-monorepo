import prismaClient from "packages/core-service/src/app/config/database";
import { SysGroupValidation } from "packages/core-service/src/modules/sys-group/group-validations";
import { ResponseError, Validation, type IBaseServiceCrud } from "shared";
import type { IUserJWTPayload } from "shared/src/types/types";
import type { TSysGroup, TSysGroupCreate, TSysGroupUpdate } from './group-models';

export class SysGroupService implements IBaseServiceCrud {

  private user?: IUserJWTPayload | undefined;
  constructor(user?: IUserJWTPayload) {
    this.user = user;
  }

  //#region CRUD 
  async create(data: TSysGroupCreate): Promise<TSysGroup> {
    const requestData = await Validation.validate(SysGroupValidation.GROUP_CREATION_SCHEMA, data);

    const isExist = await prismaClient.group.count({
      where: {
        name: {
          equals: requestData.name,
          mode: 'insensitive',
        },
        deletedAt: {
          equals: null,
        }
      },
    });

    if (isExist > 0) {
      throw new ResponseError(404,"Group already exists");
    }
    const newGroup = await prismaClient.$transaction(async (tx) => {
      const group = await tx.group.create({
        data: {
          ...requestData,
          name: requestData.name.toUpperCase(),
        },
      });

      // Link menu to group
      const menus = await tx.menu.findMany({
        where: {
          deletedAt: null,
        },
        select: {
          id: true,
        },
      });

      await tx.menuGroup.createMany({
        data: menus.map((menu) => ({
          menuId: menu.id,
          groupId: group.id,
        })),
      });

      return group;
    });


    return newGroup;
  }

  async findMany(_query?: any): Promise<TSysGroup[]> {
    const groups = await prismaClient.group.findMany({
      where: {
        deletedAt: null,
      },
    });
    return groups;
  }

  async findOne(id: string | number): Promise<TSysGroup | null> {
    const group = await prismaClient.group.findFirst({
      where: {
        id: Number(id),
        deletedAt: null,
      },
    });

    if (!group) {
      throw new ResponseError(404, "Group not found");
    }
    return group;
  }

  async updateOne(id: string | number, data: TSysGroupUpdate): Promise<TSysGroup | null> {
    const requestData = await Validation.validate(SysGroupValidation.GROUP_UPDATE_SCHEMA, data);

    const isExist = await prismaClient.group.findFirst({
      where: {
        id: Number(id),
        deletedAt: null,
      },
    });

    if (!isExist) {
      throw new ResponseError(404, `Group ${requestData.description} not found`);
    }

    const updatedGroup = await prismaClient.group.update({
      where: {
        id: Number(id),
      },
      data: requestData,
    });
    return updatedGroup;
  }

  async updateMany(criteria: any, data: TSysGroupUpdate[]): Promise<string> {
    const requestData = await Validation.validate(SysGroupValidation.GROUP_UPDATE_SCHEMA, data);
    const updatedGroups = await prismaClient.group.updateMany({
      where: criteria,
      data: requestData,
    });
    return `${updatedGroups.count} groups updated`;
  }

  async deleteOne(id: string | number): Promise<string> {
    const isExist = await prismaClient.group.findFirst({
      where: {
        id: Number(id),
        deletedAt: null,
      },
    });

    if (!isExist) {
      throw new ResponseError(404, `Group ${id} not found`);
    }

    const res = await prismaClient.group.update({
      where: {
        id: Number(id),
      },
      data: {
        deletedAt: new Date(),
        deletedBy: this.user?.email || 'system',
      },
    });
    return `Group ${res.name} is deleted`;
  }

  async deleteMany(ids: (string | number)[]): Promise<string[]> {
    const deletedIds: string[] = [];
    const res = await prismaClient.group.updateManyAndReturn({
      where: {
        id: {
          in: ids.map((id) => Number(id)),
        }
      },
      data: {
        deletedAt: new Date(),
        deletedBy: this.user?.email || 'system',
      }
    });
    res.forEach((group) => deletedIds.push(`Group ${group.id} is deleted`));
    return deletedIds;
  }
  //#endregion CRUD

  //#region Helper
  async findGroupByName(name: string): Promise<TSysGroup | null> {
    const group = await prismaClient.group.findFirst({
      where: {
        name: {
          equals: name.toUpperCase(),
          mode: 'insensitive',
        },
        deletedAt: null,
      },
    });
    return group;
  }

}