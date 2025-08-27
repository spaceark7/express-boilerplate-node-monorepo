import jwt from 'jsonwebtoken'
import type { IUserJWTPayload } from 'shared/src/types/types';

const signToken = (userId: number, email: string, groupId: number) => {
  const payload: IUserJWTPayload = { userId, email, groupId };
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });
};

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as IUserJWTPayload;
    console.log('shared:jwt:verifyToken:decoded', decoded);

    return decoded;
  } catch (error) {
    console.log('shared:jwt:verifyToken:error', error);
    throw new Error(error instanceof Error ? error.message : 'Invalid token');
  }
};

export { signToken, verifyToken };
