import prismaClient from "packages/core-service/src/app/config/database";
import type { TSysUser } from "packages/core-service/src/modules/sys-auth/auth-models";
import type { TSysUserCreate } from "packages/core-service/src/modules/sys-user/user-models";
import { UserValidation } from "packages/core-service/src/modules/sys-user/user-validations";
import { ResponseError, Validation, type IBaseServiceCrud } from "shared";
import type { IUserJWTPayload } from "shared/src/types/types";

export class UserService implements IBaseServiceCrud  {

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

    async findMany(query?: any): Promise<Partial<any[] | null>> {
      const users =  await prismaClient.user.findMany({
        where: {
          deletedAt: null
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

      if (!users || users.length === 0) {
        throw new ResponseError(404, "No users found");
      }

      return users;
    }

    //#endregion CRUD Operations


}