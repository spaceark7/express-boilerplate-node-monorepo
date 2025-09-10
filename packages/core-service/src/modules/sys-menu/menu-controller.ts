import type { NextFunction, Request, Response } from "express";
import { MenuService } from "packages/core-service/src/modules/sys-menu/menu-services";
import { type IBaseController, HTTP_METHOD, HTTP_RESPONSE_STATUS, ResponseDTO, ResponseError } from "shared";
import { BaseController } from "shared/src/base-controller";

export class MenuController extends BaseController implements IBaseController {
  private static instanceName = 'Menu';
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const menuService = MenuController.getService(req, MenuService);

      const menu = await menuService.create(req.body);
      res.status(HTTP_RESPONSE_STATUS.CREATED).json(ResponseDTO.format({ data: menu, instanceName: MenuController.instanceName, status: HTTP_RESPONSE_STATUS.CREATED, method: HTTP_METHOD.POST }, req.t));
    } catch (error) {
      next(error);
    }
  }

  static async findMany(req: Request, res: Response, next: NextFunction) {
    try {
      const menuService = MenuController.getService(req, MenuService);

      const menus = await menuService.findMany();
      res.status(HTTP_RESPONSE_STATUS.OK).json(ResponseDTO.format({ data: menus, instanceName: MenuController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.GET }, req.t));
    } catch (error) {
      next(error);
    }
  }

  static async findByGroupId(req: Request, res: Response, next: NextFunction) {
    try {
      const { groupId } = req.params;
      if (!groupId) {
        throw new ResponseError(400, 'Group ID is required');
      }

      const menuService = MenuController.getService(req, MenuService);

      const menus = await menuService.findMenusByGroupId(Number(groupId), true);
      res.status(HTTP_RESPONSE_STATUS.OK).json(ResponseDTO.format({ data: menus, instanceName: MenuController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.GET }, req.t));
    } catch (error) {
      next(error);
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const menuService = MenuController.getService(req, MenuService);
      const { id } = req.params;

      const menu = await menuService.findById(Number(id));
      res.status(HTTP_RESPONSE_STATUS.OK).json(ResponseDTO.format({ data: menu, instanceName: MenuController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.GET }, req.t));
    } catch (error) {
      next(error);
    }
  }

  static async updateOne(req: Request, res: Response, next: NextFunction) {
    try {
      const menuService = MenuController.getService(req, MenuService);

      const {groupId} = req.params;
      const menuData = req.body;

      if(!groupId || !menuData) {
       throw new ResponseError(400, 'Invalid request data');
      }

      const updatedMenu = await menuService.updateOne(Number(groupId), menuData);
      res.status(HTTP_RESPONSE_STATUS.OK).json(ResponseDTO.format({ data: updatedMenu, instanceName: MenuController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.PUT }, req.t));
    } catch (error) {
      next(error);
    }
  }

  static async deleteOne(req: Request, res: Response, next: NextFunction) {
    // Call the service to delete a menu
    try {
      const menuService = MenuController.getService(req, MenuService);
      const { menuId } = req.params;
      if (!menuId) {
        throw new ResponseError(400, 'Menu ID is required');
      }

      const deletedMenu = await menuService.deleteOne(Number(menuId));
      res.status(HTTP_RESPONSE_STATUS.OK).json(ResponseDTO.format({ data: deletedMenu, instanceName: MenuController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.DELETE }, req.t));
    } catch (error) {
      next(error);
    }
  }

  static async deleteMany(req: Request, res: Response, next: NextFunction) {
    // Call the service to delete multiple menus
    try {
      const menuService = MenuController.getService(req, MenuService);
      const { items } = req.body;
      if (!items || !Array.isArray(items) || items.length === 0) {
        throw new ResponseError(400, 'Items Ids array is required');
      }

      const deletedMenus = await menuService.deleteMany(items);
      res.status(HTTP_RESPONSE_STATUS.OK).json(ResponseDTO.format({ data: deletedMenus, instanceName: MenuController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.DELETE }, req.t));
    } catch (error) {
      next(error);
    }
  }
}
