import { Prisma } from "packages/core-service/src/generated/prisma";
import { ResponseError } from "shared/src/response-error";
import { HTTP_RESPONSE_STATUS } from "shared/src/types/internal-response";

/**
 * Maps PrismaClientKnownRequestError and PrismaClientInitializationError
 * into a ResponseError with proper message and status.
 */
export function mapPrismaError(error: unknown): ResponseError | null {
  if (error instanceof Prisma.PrismaClientInitializationError) {
    switch (error.errorCode) {
      case "P1000":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Authentication failed against database server.`
        );
      case "P1001":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Can't reach database server.`
        );
      case "P1002":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Database server timed out.`
        );
      case "P1003":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Database does not exist.`
        );
      case "P1008":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Operations timed out.`
        );
      case "P1009":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Database already exists.`
        );
      case "P1010":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Access denied for database user.`
        );
      case "P1011":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `TLS connection error.`
        );
      case "P1012":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Schema validation error: ${error.message}`
        );
      case "P1013":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Invalid database string.`
        );
      case "P1017":
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Server has closed the connection.`
        );
      default:
        return new ResponseError(
          HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
          `Database Connection error`
        );
    }
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2000":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Value too long for column.`);
      case "P2001":
        return new ResponseError(HTTP_RESPONSE_STATUS.NOT_FOUND, `Record not found.`);
      case "P2002":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Unique constraint failed.`);
      case "P2003":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Foreign key constraint failed.`);
      case "P2004":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Constraint failed.`);
      case "P2005":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Invalid field value.`);
      case "P2006":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Invalid provided value.`);
      case "P2011":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Null constraint violation.`);
      case "P2012":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Missing required value.`);
      case "P2021":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Table does not exist.`);
      case "P2022":
        return new ResponseError(HTTP_RESPONSE_STATUS.BAD_REQUEST, `Column does not exist.`);
      case "P2025":
        return new ResponseError(HTTP_RESPONSE_STATUS.NOT_FOUND, `Required record not found.`);
      default:
        return new ResponseError(
          HTTP_RESPONSE_STATUS.BAD_REQUEST,
          `Database request error: ${error.message}`
        );
    }
  }

  return null;
}
