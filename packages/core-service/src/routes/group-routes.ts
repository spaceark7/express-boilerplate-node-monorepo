import { Router } from "express";
import { authorizationMiddleware } from "packages/core-service/src/middleware/authorization-middleware";
import { SysGroupController } from "packages/core-service/src/modules/sys-group/group-controller";


export const groupRoutes = Router();

groupRoutes.use(authorizationMiddleware)
groupRoutes.post("/groups", SysGroupController.create);
groupRoutes.get("/groups", SysGroupController.findMany);
groupRoutes.get("/groups/:id", SysGroupController.findOne);
groupRoutes.put("/groups/:id", SysGroupController.updateOne);
groupRoutes.delete("/groups/:id", SysGroupController.deleteOne);
