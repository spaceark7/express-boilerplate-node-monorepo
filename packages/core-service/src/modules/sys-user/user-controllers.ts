import type { NextFunction, Request, Response } from "express";
import { UserService } from "packages/core-service/src/modules/sys-user/user-service";
import { parseQuery, type PrismaQuery } from "prisma-query-tools";
import { BaseController, HTTP_METHOD, HTTP_RESPONSE_STATUS, ResponseDTO } from "shared";

export class UserController extends BaseController {
  private  static instanceName = 'User';
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
}