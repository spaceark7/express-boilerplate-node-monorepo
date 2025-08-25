import type { AnyObject } from 'yup'

export class Validation {
  static validate<T>(schema: AnyObject, data: T): Promise<T> {
    return schema.validate(data, {
      abortEarly: false,
    });
  }
}