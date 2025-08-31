import type { TFunctionExt } from "i18next";
import { HTTP_RESPONSE_STATUS, type IResponseBody, type IResponseParams, } from "shared/src/types/internal-response";

export class ResponseDTO {
  static format<T>({ data, instanceName, status, method, meta }: IResponseParams<T>, t: TFunctionExt): IResponseBody<T> {
    switch (status) {
      case HTTP_RESPONSE_STATUS.OK:
        return {
          status: true,
          message: `${method} ${instanceName} ${t('success.operation')}`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.CREATED:
        return {
          status: true,
          message: `${instanceName} ${t('success.created')}`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.BAD_REQUEST:
        return {
          status: false,
          message: `${instanceName} ${t('error.bad_request')}`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.UNAUTHORIZED:
        return {
          status: false,
          message: `${instanceName} ${t('error.unauthorized')}`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.NOT_FOUND:
        return {
          status: false,
          message: `${instanceName} ${t('error.not_found')}`,
          data,
          meta
        }
      case HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR:
        return {
          status: false,
          message: `${instanceName} ${t('error.internal_server')}`,
          data,
          meta
        }
      default:
        return {
          status: true,
          message: `${method} ${instanceName} ${t('success.operation')}`,
          data,
          meta
        }
    }
  }
  static error<T>(error: any, method: string, meta?: any,): IResponseBody<T> {
  return {
    status: false,
    message: `${method}`,
    error,
    meta
  }
}
}
