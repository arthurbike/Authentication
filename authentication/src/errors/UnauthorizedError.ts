import ApplicationError from "./ApplicationError";

class UnauthorizedError extends ApplicationError {
  status = 401;

  constructor(message?: string) {
    super();
    this.message = message || "Unauthorized";
  }
}

export default UnauthorizedError;
