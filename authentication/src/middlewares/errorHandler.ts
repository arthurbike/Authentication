import { NextFunction, Request, Response } from "express";
import ApplicationError from "../errors/ApplicationError";
import ValidationErrors from "../errors/ValidationErrors";
import "express-async-errors";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ApplicationError) {
    return res.status(error.status).send({ error: { message: error.message } });
  }

  if (error instanceof ValidationErrors) {
    console.log(error.message);

    return res.status(error.status).send({
      error: "Invalid form data",
      messages: error.messages,
    });
  }

  if (process.env.ENVIRONMENT === "development") {
    console.log(error);
    return res.status(500).send(error);
  }

  res.status(500).send({ message: "Internal server error" });
};
