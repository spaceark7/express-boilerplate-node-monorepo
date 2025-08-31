import type { TFunctionExt } from 'i18next';
import jwt from 'jsonwebtoken';
import type { IUserJWTPayload } from 'shared/src/types/types';

const signToken = (userId: number, email: string, groupId: number) => {
  const payload: IUserJWTPayload = { userId, email, groupId };
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });
};

const verifyToken = (token: string, t?: TFunctionExt) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as IUserJWTPayload;

    return decoded;
  } catch (error) {
    throw new Error(error instanceof Error ? t ? t('error.jwt.expired') : 'JWT expired'
      : t ? t('error.jwt.invalid') : 'JWT invalid');
  }
};

export { signToken, verifyToken };
