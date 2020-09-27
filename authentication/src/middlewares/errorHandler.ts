import { NextFunction, Request, Response } from "express";
import ApplicationError from "../errors/ApplicationError";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ApplicationError) {
    return res.status(error.status).send({ error: { message: error.message } });
  }

  res.status(500).send({ message: "Internal server error" });
};
