import type { NextFunction, Request, Response } from "express";
import { Prisma } from "packages/core-service/src/generated/prisma";
import { mapPrismaError } from "packages/core-service/src/utils/prismaErrMapper";
import { errorHandler, ResponseDTO } from "shared";

export const errorMiddleware = async (error: Error, req: Request, res: Response, _next: NextFunction) => {
  console.log('Error Middleware Triggered:', error);
  if (error instanceof Prisma.PrismaClientInitializationError) {
    const err = mapPrismaError(error);
    if (err) {
      return res.status(err.status).json(ResponseDTO.error(err.message, req.t('error.database'))).end();
    }
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const err = mapPrismaError(error);
    if (err) {
      return res.status(err.status).json(ResponseDTO.error(err.message, req.t('error.database'))).end();
    }
  } else {
    console.log('beside database')
    console.log(req.t)
    const { status, output } = errorHandler(error, req.t);
    return res.status(status).json(output).end();

  }
}