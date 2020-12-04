import ApplicationError from "./ApplicationError";

class BadRequestError extends ApplicationError {
  messages?: string[];
  status = 400;

  constructor(message: string) {
    super(message);
  }
}

export default BadRequestError;
