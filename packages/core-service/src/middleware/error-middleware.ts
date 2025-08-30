import type { NextFunction, Request, Response } from "express";
import { Prisma } from "packages/core-service/src/generated/prisma";
import { mapPrismaError } from "packages/core-service/src/utils/prismaErrMapper";
import { errorHandler, ResponseDTO } from "shared";

export const errorMiddleware = async (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof Prisma.PrismaClientInitializationError) {
    const err = mapPrismaError(error);
    if (err) {
      return res.status(err.status).json(ResponseDTO.error(err.message, 'Database')).end();
    }
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const err = mapPrismaError(error);
    if (err) {
      return res.status(err.status).json(ResponseDTO.error(err.message, 'Database')).end();
    }
  } else {
    console.log('beside database')
    const { status, output } = errorHandler(error);
    return res.status(status).json(output).end();

  }
}