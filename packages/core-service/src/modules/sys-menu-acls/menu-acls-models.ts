import type { Menu } from "packages/core-service/src/generated/prisma";


export type TSysMenuAcls = Menu

export type TSysMenuAclsUpdate = {
  accessLevels?: string[]
  isActive?: boolean
}