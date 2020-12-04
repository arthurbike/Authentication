import jwt from "jsonwebtoken";

export interface UserPayload {
  id: string;
  email?: string;
}

export const createToken = (data: UserPayload, options?: jwt.SignOptions) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: 60 * 60,
    ...options,
  });
};
