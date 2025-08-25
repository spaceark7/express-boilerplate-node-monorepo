import type { NextFunction, Request, Response } from "express";
import { ResponseDTO, ResponseError } from "shared";
import { ValidationError } from "yup";

export const errorMiddleware = async (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof ValidationError) {
    const messages = error.inner.map(e => e.message);
    res.status(400).json(ResponseDTO.error(messages, 'Validation'));
  } else if (error instanceof ResponseError) {
    res.status(error.status).json(ResponseDTO.error(error.message, 'Request'));
  } else {
    res.status(500).json(ResponseDTO.error(error.message, 'Internal Server'));
  }
}