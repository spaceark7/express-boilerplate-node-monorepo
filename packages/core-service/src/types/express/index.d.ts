declare global {
  namespace Express {
    interface Request {
      user?: IUserJWTPayload
    }
  }
}

export {};