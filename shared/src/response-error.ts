export class ResponseError extends Error {
  status: any;
  constructor(status: any, message: string) {
    super(message);
    this.name = "ResponseError";
    this.status = status;
  }
}