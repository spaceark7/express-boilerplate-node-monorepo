import type { TSysGroupCreate, TSysGroupUpdate } from 'packages/core-service/src/modules/sys-group/group-models';
import * as yup from 'yup'

export class SysGroupValidation {
  static readonly GROUP_CREATION_SCHEMA = yup.object<TSysGroupCreate>({
    name: yup.string().min(2).max(100),
    description: yup.string().max(200).optional()
  });

  static readonly GROUP_UPDATE_SCHEMA = yup.object<TSysGroupUpdate>({
    description: yup.string().max(200).optional()
  });
}