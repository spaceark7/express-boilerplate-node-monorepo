import * as yup from 'yup'

export class UserValidation {
  static readonly USER_REGISTRATION_SCHEMA = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    groupId: yup.number().integer().optional(),
    firstName: yup.string().min(2).max(100).required(),
    lastName: yup.string().min(2).max(100).required(),
  });

  static readonly USER_LOGIN_SCHEMA = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
}