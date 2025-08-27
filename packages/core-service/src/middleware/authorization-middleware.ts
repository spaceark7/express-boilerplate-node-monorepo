import type { NextFunction, Request, Response } from "express";
import { MenuService } from "packages/core-service/src/modules/sys-menu/menu-services";
import { HTTP_METHOD, ResponseError } from "shared";
import type { IUserJWTPayload } from "shared/src/types/types";

export const authorizationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as IUserJWTPayload;

  if (!user) {
    new ResponseError(401, 'Unauthorized')
  }

  const method = req.method as keyof typeof HTTP_METHOD;

  // Check if user has the required permissions
  const hasPermission = await MenuService.checkUserGroupPermissions(user, req.path, method);
  console.log(`authorizationMiddleware: ${req.path} [${method}]`, hasPermission);
  if (!hasPermission) {
    throw new ResponseError(403, 'Forbidden');
  }

  next();
};
