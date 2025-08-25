import type { User, Profile,  } from "../generated/prisma";


export type TSysUser = User
export type TSysUserRegister = Pick<User, 'email' | 'password' | 'groupId'> & Pick<Profile, 'firstName' | 'lastName'>
export type TSysUserLogin = Pick<User, 'email' | 'password'> 
export type TSysUserUpdate = Partial<User> & Partial<Profile> 