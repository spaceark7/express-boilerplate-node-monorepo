import type { NextFunction, Request, Response } from "express";
import { MenuAclsService } from "packages/core-service/src/modules/sys-menu-acls/menu-acls-service";
import { parseQuery, type PrismaQuery, } from "prisma-query-tools";
import { BaseController, HTTP_METHOD, HTTP_RESPONSE_STATUS, ResponseDTO, ResponseError } from "shared";

export class MenuAclsController extends BaseController {
  private static instanceName = 'MenuAcls';

  static async findManyByGroupId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const menuAclsService = MenuAclsController.getService(req, MenuAclsService);
      const result = await menuAclsService.findMany(req.params);
      res.status(200).json(
        ResponseDTO.format({
          data: result,
          instanceName: MenuAclsController.instanceName,
          method: HTTP_METHOD.GET,
          status: HTTP_RESPONSE_STATUS.OK
        }, req.t)
      );
    } catch (error) {
      next(error);
    }
  }

  static async updateMenuAcls(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { menuId, groupId } = req.params;
      if (!menuId || !groupId) {
        throw new ResponseError(400, 'Menu ID and Group ID are required');
      }

      const menuAclsService = MenuAclsController.getService(req, MenuAclsService);
      const updatedMenu = await menuAclsService.updateMenuAcls(Number(groupId), Number(menuId), req.body);
      res.status(200).json(
        ResponseDTO.format({
          data: updatedMenu,
          instanceName: MenuAclsController.instanceName,
          method: HTTP_METHOD.PATCH,
          status: HTTP_RESPONSE_STATUS.OK
        }, req.t)
      );
    } catch (error) {
      next(error);
    }
  }
  
}