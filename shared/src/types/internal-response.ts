export interface IResponseBody<T> {
  status?: boolean
  message?: string
  data?: T | undefined
  error?: any
  meta?: any
}

export interface IResponseParams<T> {
  status?: HTTP_RESPONSE_STATUS
  method?: HTTP_METHOD
  data?: T | undefined
  instanceName?: string
  meta?: any
}

enum HTTP_RESPONSE_STATUS {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}


export { HTTP_RESPONSE_STATUS, HTTP_METHOD }