import bcrypt from 'bcrypt';
import prismaClient from "packages/core-service/src/app/config/database";
import { toUserResponse, type TSysUserLogin, type TSysUserRegister } from "packages/core-service/src/modules/sys-auth/auth-models";
import { SysGroupService } from "packages/core-service/src/modules/sys-group/group-services";
import { EUserGroup } from "packages/core-service/src/types/enum";
import { AuthValidation } from "packages/core-service/src/modules/sys-auth/auth-validation";
import { ResponseError, signToken, Validation } from "shared";

export class AuthService {
  static async register(userData: TSysUserRegister) {
    const requestData = await Validation.validate(AuthValidation.AUTH_REGISTRATION_SCHEMA, userData);
    console.log(requestData)
    const isExist = await prismaClient.user.count({
      where: {
        email: requestData.email
      }
    });
    if (isExist) {
      throw new ResponseError(400, "Email already registered");
    }
    requestData.password = await bcrypt.hash(requestData.password, process.env.HASH_SALT ? parseInt(process.env.HASH_SALT) : 10);
    const sysGroupService = new SysGroupService()
    const userGroupRole = await sysGroupService.findGroupByName(EUserGroup.USER);
    if (!userGroupRole) {
      throw new ResponseError(400, "User group role not found");
    }
    // Registration logic here
    const newUser = await prismaClient.user.create({
      data: {
        email: requestData.email,
        password: requestData.password,
        groupId: requestData.groupId ? requestData.groupId : (userGroupRole && userGroupRole.id),
        profile: {
          create: {
            firstName: requestData.firstName,
            lastName: requestData.lastName
          }
        }
      },
      select: {
        email: true,
        id: true,
        group: {
          select: {
            name: true
          }
        },
        profile: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      }
    });

    return newUser;
  }
  static async login(userData: TSysUserLogin) {
    const requestData = await Validation.validate(AuthValidation.AUTH_LOGIN_SCHEMA, userData);

    const user = await prismaClient.user.findUnique({
      where: {
        email: requestData.email
      }
    });

    if (!user) {
      throw new ResponseError(401, "Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(requestData.password, user.password);
    if (!isPasswordValid) {
      throw new ResponseError(401, "Invalid email or password");
    }

    const accessToken = signToken(user.id, user.email, user.groupId);
    return { user: toUserResponse(user), accessToken };
  }
}