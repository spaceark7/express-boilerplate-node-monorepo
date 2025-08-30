import prismaClient from "packages/core-service/src/app/config/database";
import type { TSysUser } from "packages/core-service/src/modules/sys-auth/auth-models";
import type { TSysUserCreate, TSysUserUpdate } from "packages/core-service/src/modules/sys-user/user-models";
import { UserValidation } from "packages/core-service/src/modules/sys-user/user-validations";
import { mergeQueries } from "prisma-query-tools";
import { ResponseError, Validation, type IBaseServiceCrud } from "shared";
import type { IUserJWTPayload } from "shared/src/types/types";

export class UserService implements IBaseServiceCrud {

  private user?: IUserJWTPayload | undefined;

  constructor(user?: IUserJWTPayload) {
    this.user = user;
  }

  //#region CRUD Operations
  async create(data: TSysUserCreate): Promise<Partial<TSysUser>> {
    const requestData = await Validation.validate(UserValidation.USER_CREATE_SCHEMA, data);
    const isExist = await prismaClient.user.count({
      where: {
        email: requestData.email
      }
    });
    if (isExist) {
      throw new ResponseError(400, "Email already registered");
    }
    return prismaClient.user.create({
      data: requestData,
      select: {
        id: true,
        email: true,
        groupId: true,
        createdAt: true,
        updatedAt: true,
        profile: {
          select: {
            firstName: true,
            lastName: true,

          }
        }
      }
    });
  }

  async createMany(data: TSysUserCreate[]): Promise<any> {
    const requestData = await Validation.validate(UserValidation.USER_CREATE_SCHEMA, data);
    const users = await prismaClient.user.createMany({
      data: requestData
    });
    return `${users.count} users created successfully`;
  }

  async findMany(query?: any): Promise<Partial<any[] | null>> {
    const defaultQuery = {
      where: {
        deletedAt: null,
      },
    }
    const mergedQuery = mergeQueries(query, defaultQuery);
    console.log('Merged Query:', mergedQuery);
    console.log('Final Query:', JSON.stringify(mergedQuery));
    const users = await prismaClient.user.findMany({
      ...mergedQuery,
    });

    if (!users || users.length === 0) {
      throw new ResponseError(404, "No users found");
    }

    return users;
  }
  async findOne(uuid: string): Promise<Partial<TSysUser | null>> {
    const user = await prismaClient.user.findUnique({
      where: {
        uuid
      },
      select: {
        id: true,
        email: true,
        groupId: true,
        createdAt: true,
        updatedAt: true,
        profile: {
          select: {
            firstName: true,
            lastName: true,
          }
        }
      }
    });

    if (!user) {
      throw new ResponseError(404, "User not found");
    }

    return user;
  }

  async updateOne(uuid: string, data: TSysUserUpdate): Promise<any | null> {
    const requestData = await Validation.validate(UserValidation.USER_UPDATE_SCHEMA, data);

    const isExist = await prismaClient.user.count({
      where: {
        uuid
      }
    });

    if (!isExist) {
      throw new ResponseError(404, "User not found");
    }

    const { profile, ...rest } = requestData;
    const user = await prismaClient.user.update({
      where: {
        uuid
      },
      omit: {
        password: true,

      },
      data: {
        ...rest,
        profile: {
          update: {
            ...profile
          }
        }
      },
      include: {
        profile: {
          omit: {
            userId: true,
            id: true,

          }
        }
      }
    });

    if (!user) {
      throw new ResponseError(404, "User not found");
    }

    return user;
  }

  async deleteOne(uuid: string): Promise<any | null> {
    const user = await prismaClient.user.update({
      where: {
        uuid
      },
      data: {
        deletedAt: new Date()
      }
    });

    if (!user) {
      throw new ResponseError(404, "User not found");
    }

    return `${user.email} has been deleted`;
  }
  async deleteMany(ids: number[]): Promise<string[]> {
    const users = await prismaClient.user.updateManyAndReturn({
      where: {
        id: {
          in: ids
        }
      },
      data: {
        deletedAt: new Date()
      }
    });

    if (!users) {
      throw new ResponseError(404, "No users found");
    }

    return users.map(user => `${user.email} has been deleted`);
  }
  //#endregion CRUD Operations


}