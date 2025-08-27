import type { NextFunction, Request, Response } from "express";
import { ResponseError, verifyToken } from "shared";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new ResponseError(401, "Unauthorized");

  const decoded = verifyToken(token);
  if (!decoded) throw new ResponseError(401, "Unauthorized");
  req.user = decoded;
  next();
};
