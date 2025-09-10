import type { Menu } from "packages/core-service/src/generated/prisma"


export type TSysMenu = Menu
export type TSysMenuDTO = {
  id: number,
  parentId?: number | undefined,
  description: string | null,
  name: string,
  label: string,
  icon: string | null,
  path: string,
  createdAt: Date,
  updatedAt: Date,
  isActive: boolean | undefined,
  actions: string[],
  acls?: string[],
  children: TSysMenuDTO[] | undefined
  orderNumber: number | undefined
}
export type TSysMenuCreate = Pick<Menu, 'name' | 'label' | 'description' | 'path' | 'icon' | 'parentId'> & {
  acls?: string[],
  isActive?: boolean,
  orderNumber: number | null | undefined

}
export type TSysMenuUpdate = Pick<Menu, 'id'> & Partial<TSysMenuCreate> &  {
  acls?: string[],
  isActive?: boolean,
  orderNumber: number | undefined
}