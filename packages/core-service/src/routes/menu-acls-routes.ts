import { Router } from "express";
import { authMiddleware } from "packages/core-service/src/middleware/auth-middleware";
import { MenuAclsController } from "packages/core-service/src/modules/sys-menu-acls/menu-acls-controllers";


export const menuAclsRoutes = Router();
menuAclsRoutes.use(authMiddleware)
//#region Menu Acls
menuAclsRoutes.get("/menu-acls/group/:groupId", MenuAclsController.findManyByGroupId);
menuAclsRoutes.patch("/menu-acls/group/:groupId/:menuId", MenuAclsController.updateMenuAcls);
//#endregion Menu Acls