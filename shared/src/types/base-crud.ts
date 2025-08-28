import type { NextFunction, Request, Response } from "express";
import type { IUserJWTPayload } from "shared/src/types/types";
type IdType = string | number;

export interface IBaseServiceCrud{
  create?(data: any): Promise<any>;
  createMany?(data: any[]): Promise<any[]>;
  findMany?(query?: any): Promise<any[] | null>;
  findOne?(id: IdType): Promise<any | null>;
  updateOne?(id: IdType, data: any): Promise<any | null>;
  updateMany?(criteria: any, data: any): Promise<any>;
  deleteOne?(id: IdType): Promise<any>;
  deleteMany?(ids: IdType[]): Promise<string[]>;
}

//  interface BaseController {
//   getService<T>(
//     req: Request,
//     ServiceClass: new (user?: IUserJWTPayload) => T
//   ): T;
//   // Additional controller-specific methods can be defined here
//   create?(req: Request, res: Response, next: NextFunction): Promise<void>;
//   findMany?(req: Request, res: Response, next: NextFunction): Promise<void>;
//   findOne?(req: Request, res: Response, next: NextFunction): Promise<void>;
//   updateOne?(req: Request, res: Response, next: NextFunction): Promise<void>;
//   deleteOne?(req: Request, res: Response, next: NextFunction): Promise<void>;

// }

export interface ICoreController {
  getService<T>(
    req: Request,
    ServiceClass: new (user?: IUserJWTPayload) => T
  ): T;
}

export interface ICRUDController {
  create?(req: Request, res: Response, next: NextFunction): Promise<void>;
  findMany?(req: Request, res: Response, next: NextFunction): Promise<void>;
  findOne?(req: Request, res: Response, next: NextFunction): Promise<void>;
  updateOne?(req: Request, res: Response, next: NextFunction): Promise<void>;
  deleteOne?(req: Request, res: Response, next: NextFunction): Promise<void>;
}

// Combined interface
export interface IBaseController extends ICoreController, ICRUDController { }
