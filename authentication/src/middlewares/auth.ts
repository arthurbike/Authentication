import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const resp = jwt.verify(req.cookies, process.env.JWT_KEY);
  console.log("HEADERS:", req.headers["authorization"]);
  if (req.cookies) {
    console.log(req.cookies);
  }

  next();
};
