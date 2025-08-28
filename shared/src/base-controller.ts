import type { IBaseController, ICoreController } from './types/base-crud';
import type { NextFunction, Request, Response } from "express";
import { ResponseError } from "shared/src/response-error";
import type { IUserJWTPayload } from "shared/src/types/types";

declare global {
  namespace Express {
    interface Request {
      user?: IUserJWTPayload
    }
  }
}

export class BaseController implements ICoreController {
  protected static getService<T>(
    req: Request,
    ServiceClass: new (user?: IUserJWTPayload) => T
  ): T {
   try {
     return new ServiceClass(req.user);
   } catch (error) {
     console.error(`${BaseController.name}:${this.getService.name}`, error);
     throw new ResponseError(500, "Internal Server Error");
   }
  }
  public getService<T>(
    req: Request,
    ServiceClass: new (user?: IUserJWTPayload) => T
  ): T {
   try {
     return new ServiceClass(req.user);
   } catch (error) {
     console.error(`${BaseController.name}:${this.getService.name}`, error);
     throw new ResponseError(500, "Internal Server Error");
   }
  }



}