import { Router } from "express";
import { AuthController } from "packages/core-service/src/modules/sys-auth/auth-controllers";

export const authRoutes = Router();

authRoutes.post('/auth/register', AuthController.register);
authRoutes.post('/auth/login', AuthController.login);
authRoutes.get('/auth/verify', AuthController.verify);