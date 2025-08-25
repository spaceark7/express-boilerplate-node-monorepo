import { Router } from "express";
import { AuthController } from "packages/core-service/src/controllers/auth-controllers";

export const authRoutes = Router();

authRoutes.post('/auth/register', AuthController.register);