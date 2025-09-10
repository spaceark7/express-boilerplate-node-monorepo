
import type { TSysMenuAclsUpdate } from 'packages/core-service/src/modules/sys-menu-acls/menu-acls-models';
import * as yup from 'yup'

export class MenuAclsValidations {
  static readonly MENU_ACLS_UPDATE_SCHEMA = yup.object<TSysMenuAclsUpdate>().shape({
    accessLevels: yup.array().of(yup.string().max(50)).optional().nullable(),
    isActive: yup.boolean().optional().nullable()
  });
}