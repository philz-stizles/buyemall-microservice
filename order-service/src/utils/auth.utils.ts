// import { promisify } from 'util';
import jwt from 'jsonwebtoken';

export const generateToken = (payload: string | any | Buffer): string =>
  jwt.sign(payload, process.env.JWT_AUTH_SECRET as string, {
    expiresIn: process.env.JWT_AUTH_EXPIRES_IN,
  });

export const verifyToken = async (token: string): Promise<any> => {
  // eslint-disable-next-line no-return-await
  // await promisify(jwt.verify)(token, process.env.JWT_AUTH_SECRET);
  return jwt.verify(
    token,
    `${process.env.JWT_AUTH_SECRET}`,
    function (err, decoded) {
      return err || decoded;
    }
  );
};
