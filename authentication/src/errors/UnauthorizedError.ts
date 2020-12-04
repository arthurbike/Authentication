import ApplicationError from "./ApplicationError";

class UnauthorizedError extends ApplicationError {
  messages?: string[];
  status = 401;

  constructor(message?: string) {
    super();
    this.message = message || "Unauthorized";
  }
}

export default UnauthorizedError;
