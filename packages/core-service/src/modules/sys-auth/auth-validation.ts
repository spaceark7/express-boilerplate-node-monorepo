import * as yup from 'yup'

export class AuthValidation {
  static readonly AUTH_REGISTRATION_SCHEMA = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    groupId: yup.number().integer().optional(),
    firstName: yup.string().min(2).max(100).required(),
    lastName: yup.string().min(2).max(100).required(),
  });

  static readonly AUTH_LOGIN_SCHEMA = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
}