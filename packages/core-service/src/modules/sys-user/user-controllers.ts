import type { NextFunction, Request, Response } from "express";
import { UserService } from "packages/core-service/src/modules/sys-user/user-service";
import { parseQuery, type PrismaQuery, } from "prisma-query-tools";
import { BaseController, HTTP_METHOD, HTTP_RESPONSE_STATUS, ResponseDTO, ResponseError } from "shared";

export class UserController extends BaseController {
  private static instanceName = 'User';

  static async createOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userService = UserController.getService(req, UserService);
      const user = await userService.create(req.body);
      res.status(201).json(
        ResponseDTO.format({
          data: user,
          instanceName: UserController.instanceName,
          method: HTTP_METHOD.POST,
          status: HTTP_RESPONSE_STATUS.CREATED
        })
      );
    } catch (error) {
      next(error);
    }
  }
  static async findMany(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log('Req:', req.query);
      let query: PrismaQuery = {};
      const parsed = parseQuery(req.query);
      console.log('Parsed:', parsed);
      if (parsed.success) {
        query = parsed.data;
      }
      console.log('Parsed Query:', query);
      const userService = UserController.getService(req, UserService);
      const users = await userService.findMany(query);
      res.json(
        ResponseDTO.format({
          data: users,
          instanceName: UserController.instanceName,
          method: HTTP_METHOD.GET,
          status: HTTP_RESPONSE_STATUS.OK
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { uuid } = req.params;
      if (!uuid) {
        throw new ResponseError(400, "User UUID is required");
      }
      const userService = UserController.getService(req, UserService);
      const user = await userService.findOne(uuid);
      res.json(
        ResponseDTO.format({
          data: user,
          instanceName: UserController.instanceName,
          method: HTTP_METHOD.GET,
          status: HTTP_RESPONSE_STATUS.OK
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async updateOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { uuid } = req.params;
      if (!uuid) {
        throw new ResponseError(400, "User UUID is required");
      }
      const userService = UserController.getService(req, UserService);
      const user = await userService.updateOne(uuid, req.body);
      res.json(
        ResponseDTO.format({
          data: user,
          instanceName: UserController.instanceName,
          method: HTTP_METHOD.PUT,
          status: HTTP_RESPONSE_STATUS.OK
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { uuid } = req.params;
      if (!uuid) {
        throw new ResponseError(400, "User UUID is required");
      }
      const userService = UserController.getService(req, UserService);
      const message = await userService.deleteOne(uuid);
      res.json(
        ResponseDTO.format({
          data: message,
          instanceName: UserController.instanceName,
          method: HTTP_METHOD.DELETE,
          status: HTTP_RESPONSE_STATUS.OK
        })
      );
    } catch (error) {
      next(error);
    }
  }
}