import { Router } from "express";
import { authMiddleware } from "packages/core-service/src/middleware/auth-middleware";
import { authorizationMiddleware } from "packages/core-service/src/middleware/authorization-middleware";
import { MenuController } from "packages/core-service/src/modules/sys-menu/menu-controller";

export const menuRoutes = Router();
menuRoutes.use(authMiddleware)
menuRoutes.use(authorizationMiddleware);
menuRoutes.post("/menu", MenuController.create);
menuRoutes.get("/menu", MenuController.findMany);
menuRoutes.get("/menu/:id", MenuController.findById);
menuRoutes.get("/menu/group/:groupId", MenuController.findByGroupId);
menuRoutes.put("/menu/group/:groupId", MenuController.updateOne);
menuRoutes.get("/menu/:id", MenuController.findById);
menuRoutes.put("/menu/:id", MenuController.updateOne);
menuRoutes.delete("/menu/:id", MenuController.deleteOne);
