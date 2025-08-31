import type { TFunctionExt } from "i18next";
import { ResponseDTO } from "shared/src/internal-response/response-dto";
import { ResponseError } from "shared/src/response-error";
import { HTTP_RESPONSE_STATUS } from "shared/src/types/internal-response";
import { ValidationError } from "yup";

export const errorHandler = (error: Error, t: TFunctionExt) => {
  if (error instanceof ValidationError) {
    console.log('Validation error occurred:', error.errors);
    const messages = error.errors.map(e => e);
    return { status: HTTP_RESPONSE_STATUS.BAD_REQUEST, output: ResponseDTO.error(messages, t('error.validation')) };
  } else if (error instanceof ResponseError) {
    return { status: error.status, output: ResponseDTO.error(error.message, t('error.bad_request')) };
  } else {
    return { status: HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR, output: ResponseDTO.error(error.message, t('error.internal_server')) };
  }
};