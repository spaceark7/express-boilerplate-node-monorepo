import type { Menu } from "packages/core-service/src/generated/prisma"


export type TSysMenu = Menu
export type TSysMenuCreate = Pick<Menu, 'name' | 'label' | 'description' | 'path' | 'icon' | 'parentId'> & {
  acls?: string[],
  isActive?: boolean
}
export type TSysMenuUpdate = Pick<Menu, 'id'> & Partial<TSysMenuCreate> &  {
  acls?: string[],
  isActive?: boolean
}