import { ResponseDTO } from "shared/src/internal-response/response-dto";
import { ResponseError } from "shared/src/response-error";
import { HTTP_RESPONSE_STATUS } from "shared/src/types/internal-response";
import { ValidationError } from "yup";

export const errorHandler = (error: Error) => {
  if (error instanceof ValidationError) {
    const messages = error.inner.map(e => e.message);
    return { status: HTTP_RESPONSE_STATUS.BAD_REQUEST, output: ResponseDTO.error(messages, 'Validation') };
  } else if (error instanceof ResponseError) {
    return { status: error.status, output: ResponseDTO.error(error.message, 'Request') };
  } else {
    return { status: HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR, output: ResponseDTO.error(error.message, 'Internal Server') };
  }
};