import type { Group } from "packages/core-service/src/generated/prisma";


export type TSysGroup = Group
export type TSysGroupCreate = Pick<Group, 'name' | 'description'>
export type TSysGroupUpdate = Partial<Pick<Group , 'description'>>