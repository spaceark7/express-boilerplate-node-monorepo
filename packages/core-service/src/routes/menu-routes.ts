import { Router } from "express";
import { authMiddleware } from "packages/core-service/src/middleware/auth-middleware";
import { authorizationMiddleware } from "packages/core-service/src/middleware/authorization-middleware";
import { MenuController } from "packages/core-service/src/modules/sys-menu/menu-controller";

export const menuRoutes = Router();
menuRoutes.use(authMiddleware)
menuRoutes.use(authorizationMiddleware);
menuRoutes.post("/menus", MenuController.create);
menuRoutes.get("/menus", MenuController.findMany);
menuRoutes.get("/menus/:id", MenuController.findById);
menuRoutes.get("/menus/group/:groupId", MenuController.findByGroupId);
menuRoutes.put("/menus/group/:groupId", MenuController.updateOne);
menuRoutes.get("/menus/:id", MenuController.findById);
menuRoutes.put("/menus/:id", MenuController.updateOne);
menuRoutes.delete("/menus/:id", MenuController.deleteOne);
