import type { Profile, User } from "packages/core-service/src/generated/prisma";


export type TSysUser = User
export type TSysUserCreate = Omit<TSysUser, 'id' | 'uuid' | 'createdAt' | 'updatedAt' | 'deletedAt'>
export type TSysUserUpdate = Partial<TSysUserCreate> & { id: number, profile: Omit<Profile, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'deletedAt'> };
