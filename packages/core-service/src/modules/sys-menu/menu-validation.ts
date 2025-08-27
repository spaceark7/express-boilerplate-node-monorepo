import type { TSysMenuCreate, TSysMenuUpdate } from 'packages/core-service/src/modules/sys-menu/menu-models';
import * as yup from 'yup'

export class MenuValidation {
  static readonly MENU_CREATE_SCHEMA = yup.object<TSysMenuCreate>().shape({
    name: yup.string().min(2).max(100).required(),
    label: yup.string().min(2).max(100).required(),
    description: yup.string().max(200).optional(),
    path: yup.string().max(100).required(),
    icon: yup.string().max(50).optional(),
    parentId: yup.number().integer().optional().nullable(),
    acls: yup.array().of(yup.string().max(50)).optional().nullable(),
    isActive: yup.boolean().optional().nullable(),
    orderNumber: yup.number().integer().nullable()

  });

  static readonly MENU_UPDATE_SCHEMA = yup.object<TSysMenuUpdate>().shape({
    id: yup.number().integer().required(),
    name: yup.string().min(2).max(100).optional(),
    label: yup.string().min(2).max(100).optional(),
    description: yup.string().max(200).optional(),
    path: yup.string().max(100).optional(),
    icon: yup.string().max(50).optional(),
    parentId: yup.number().integer().optional(),
    acls: yup.array().of(yup.string().max(50)).optional().nullable(),
    isActive: yup.boolean().optional().nullable(),
    orderNumber: yup.number().integer().optional().nullable()
  });
}