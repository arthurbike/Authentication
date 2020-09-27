import ApplicationError from "./ApplicationError";

class ForbiddenError extends ApplicationError {
  status = 403;

  constructor() {
    super();
    this.message = "Forbidden";
  }
}

export default ForbiddenError;
