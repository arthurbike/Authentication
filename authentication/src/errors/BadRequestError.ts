import ApplicationError from "./ApplicationError";

class BadRequestError extends ApplicationError {
  status = 400;

  constructor(message: string) {
    super(message);
  }
}

export default BadRequestError;
