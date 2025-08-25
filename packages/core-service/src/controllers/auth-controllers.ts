import type { NextFunction, Request, Response } from "express";
import { AuthService } from "packages/core-service/src/services/auth-services";
import { ResponseDTO } from "shared";
import { HTTP_METHOD, HTTP_RESPONSE_STATUS } from "shared/src/types/internal-response";

export class AuthController {
  private static instanceName: string = 'User'
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json(ResponseDTO.format({ data: user, instanceName: AuthController.instanceName, status: HTTP_RESPONSE_STATUS.CREATED, method: HTTP_METHOD.POST }));
    } catch (error) {
      next(error);
    }
  }
}