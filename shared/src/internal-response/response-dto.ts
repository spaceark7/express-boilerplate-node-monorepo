import { HTTP_RESPONSE_STATUS, type IResponseBody, type IResponseParams, } from "shared/src/types/internal-response";

export class ResponseDTO {
  static format<T>({ data, instanceName, status, method, meta }: IResponseParams<T>): IResponseBody<T> {
    switch (status) {
      case HTTP_RESPONSE_STATUS.OK:
        return {
          status: true,
          message: `${method} ${instanceName} successfully retrieved`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.CREATED:
        return {
          status: true,
          message: `${instanceName} created successfully`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.BAD_REQUEST:
        return {
          status: false,
          message: `${instanceName} bad request`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.UNAUTHORIZED:
        return {
          status: false,
          message: `${instanceName} not authorized`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.NOT_FOUND:
        return {
          status: false,
          message: `${instanceName} not found`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR:
        return {
          status: false,
          message: `${instanceName} internal server error`,
          data,
          meta
        }
      default:
        return {
          status: true,
          message: `${method} ${instanceName} successfully retrieved`,
          data,
          meta
        }
    }
  }
  static error<T>(error: any, method: string, meta?: any): IResponseBody<T> {
  return {
    status: false,
    message: `${method} failed`,
    error,
    meta
  }
}
}
