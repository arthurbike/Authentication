import ApplicationError from "./ApplicationError";

class ForbiddenError extends ApplicationError {
  messages?: string[];
  status = 403;

  constructor(message?: string) {
    super();
    this.message = message || "Forbidden";
  }
}

export default ForbiddenError;
