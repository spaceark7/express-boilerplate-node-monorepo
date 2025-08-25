import type { NextFunction, Request, Response } from "express";
import { errorHandler } from "shared";

export const errorMiddleware = async (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { status, output } = errorHandler(error);
  res.status(status).json(output);
}