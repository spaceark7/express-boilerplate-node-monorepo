
import type { TSysUserCreate, TSysUserUpdate } from "packages/core-service/src/modules/sys-user/user-models";
import * as yup from "yup";
export class UserValidation {
  static readonly USER_CREATE_SCHEMA = yup.object<TSysUserCreate>({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    firstName: yup.string().min(2).max(100).required(),
    lastName: yup.string().min(2).max(100).required(),
  })

  static readonly USER_UPDATE_SCHEMA = yup.object<TSysUserUpdate>({
    id: yup.number().required(),
    email: yup.string().email().required(),
    profile: yup.object({
      firstName: yup.string().min(2).max(100).nullable(),
      lastName: yup.string().min(2).max(100).nullable(),
      emailSecondary: yup.string().email().nullable(),
      phone: yup.string().nullable(),
    }).nullable()
  })

}