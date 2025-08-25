import prismaClient from "packages/core-service/src/app/config/database";
import type { TSysUserRegister } from "packages/core-service/src/models/user-models";

export class AuthService {
  async register(userData: TSysUserRegister) {
    console.log(userData)
    const isExist = await prismaClient
    // Registration logic here
  }
}