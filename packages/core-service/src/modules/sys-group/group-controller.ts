import type { QueryOptions } from "@prisma/client/runtime/library";
import type { NextFunction, Request, Response } from "express";
import { SysGroupService } from "packages/core-service/src/modules/sys-group/group-services";
import { parseQuery, type PrismaQuery, type QueryParseResult } from "prisma-query-tools";
import { BaseController, HTTP_METHOD, HTTP_RESPONSE_STATUS, ResponseDTO } from "shared";
export class SysGroupController extends BaseController   {

  private static instanceName = 'Group';
  // Controller methods go here

 static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     const groupService = SysGroupController.getService(req, SysGroupService);
     const group = await groupService.create(req.body);
     res.status(HTTP_RESPONSE_STATUS.CREATED).json(
      ResponseDTO.format({ data: group, instanceName: SysGroupController.instanceName, status: HTTP_RESPONSE_STATUS.CREATED, method: HTTP_METHOD.POST })
     );
   } catch (error) {
     next(error);
   }
 }

 static async findMany(req: Request, res: Response, next: NextFunction): Promise<void> {
   console.log('Req:', req.query);
   let query: PrismaQuery = {};
   const parsed = parseQuery(req.query);
   if (parsed.success) {
     query = parsed.data;
   }
   console.log('Parsed Query:', query);
   try {
     const groupService = SysGroupController.getService(req, SysGroupService);
     const groups = await groupService.findMany(query);
     res.status(HTTP_RESPONSE_STATUS.OK).json(
      ResponseDTO.format({ data: groups, instanceName: SysGroupController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.GET })
     );
   } catch (error) {
     next(error);
   }
 }

 static async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     const { id } = req.params;
     const groupService = SysGroupController.getService(req, SysGroupService);
     const group = await groupService.findOne(Number(id));
     res.status(HTTP_RESPONSE_STATUS.OK).json(
      ResponseDTO.format({ data: group, instanceName: SysGroupController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.GET })
     );
   } catch (error) {
     next(error);
   }
 }

 static async updateOne(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     const { id } = req.params;
     const groupService = SysGroupController.getService(req, SysGroupService);
     const group = await groupService.updateOne(Number(id), req.body);
     res.status(HTTP_RESPONSE_STATUS.OK).json(
      ResponseDTO.format({ data: group, instanceName: SysGroupController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.PUT })
     );
   } catch (error) {
     next(error);
   }
 }

 static async deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
   try {
     const { id } = req.params;
     const groupService = SysGroupController.getService(req, SysGroupService);
     const result = await groupService.deleteOne(Number(id));
     res.status(HTTP_RESPONSE_STATUS.OK).json(
      ResponseDTO.format({ data: result, instanceName: SysGroupController.instanceName, status: HTTP_RESPONSE_STATUS.OK, method: HTTP_METHOD.DELETE })
     );
   } catch (error) {
     next(error);
   }
 }


  
  


}
