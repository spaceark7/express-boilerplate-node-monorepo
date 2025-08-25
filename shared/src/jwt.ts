import jwt from 'jsonwebtoken'

const signToken = (userId: number, email: string, groupId: number) => {
  const payload = { userId, email, groupId };
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });
};

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Invalid token');
  }
};

export { signToken, verifyToken };
