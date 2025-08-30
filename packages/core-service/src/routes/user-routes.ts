import { Router } from "express";
import { authorizationMiddleware } from "packages/core-service/src/middleware/authorization-middleware";
import { UserController } from "packages/core-service/src/modules/sys-user/user-controllers";

export const userRoutes = Router()

userRoutes.use(authorizationMiddleware)
userRoutes.get("/users", UserController.findMany);
userRoutes.get("/users/:uuid", UserController.findOne);
userRoutes.post("/users", UserController.createOne);
userRoutes.put("/users/:uuid", UserController.updateOne);
userRoutes.delete("/users/:uuid", UserController.deleteOne);