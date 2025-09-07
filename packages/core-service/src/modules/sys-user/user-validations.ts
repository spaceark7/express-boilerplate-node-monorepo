
import type { Profile } from "packages/core-service/src/generated/prisma";
import type { TSysUserCreate, TSysUserUpdate } from "packages/core-service/src/modules/sys-user/user-models";
import * as yup from "yup";
export class UserValidation {
  static readonly USER_CREATE_SCHEMA = yup.object<TSysUserCreate & {
    profile: Omit<Profile, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  }>({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    groupId: yup.number().required(),
    profile: yup.object({
      firstName: yup.string().min(2).max(100).nullable(),
      lastName: yup.string().min(2).max(100).nullable(),
      emailSecondary: yup.string().email().nullable(),
      phone: yup.string().min(10, 'invalid phone number').max(15, 'invalid phone number')
        .matches(/^(?:\+62|62|0)8[1-9][0-9]{6,9}$/, 'invalid phone number').nullable(),
    }).nullable()
  })
  static readonly USER_CREATEMANY_SCHEMA = yup.array().of(yup.object<TSysUserCreate & {
    profile: Omit<Profile, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  }>({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    groupId: yup.number().required(),
    profile: yup.object({
      firstName: yup.string().min(2).max(100).nullable(),
      lastName: yup.string().min(2).max(100).nullable(),
      emailSecondary: yup.string().email().nullable(),
      phone: yup.string().min(10, 'invalid phone number').max(15, 'invalid phone number')
        .matches(/^(?:\+62|62|0)8[1-9][0-9]{6,9}$/, 'invalid phone number').nullable(),
    }).nullable()
  }))

  static readonly USER_UPDATE_SCHEMA = yup.object<TSysUserUpdate>({
    id: yup.number().optional(),
    email: yup.string().email().optional(),
    profile: yup.object({
      firstName: yup.string().min(2).max(100).nullable(),
      lastName: yup.string().min(2).max(100).nullable(),
      emailSecondary: yup.string().email().nullable(),
      phone: yup.string().min(10, 'invalid phone number').max(15, 'invalid phone number')
        .matches(/^(?:\+62|62|0)8[1-9][0-9]{6,9}$/, 'invalid phone number').nullable(),
    }).nullable()
  })

}