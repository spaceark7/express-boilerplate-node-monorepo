import { Router } from "express";
import { MenuController } from "packages/core-service/src/modules/sys-menu/menu-controller";

export const menuRoutes = Router();

menuRoutes.post("/menu", MenuController.create);
menuRoutes.get("/menu", MenuController.findMany);
menuRoutes.get("/menu/group/:groupId", MenuController.findByGroupId);
menuRoutes.put("/menu/group/:groupId", MenuController.updateOne);
menuRoutes.get("/menu/:id", MenuController.findById);
menuRoutes.put("/menu/:id", MenuController.updateOne);
menuRoutes.delete("/menu/:id", MenuController.deleteOne);
