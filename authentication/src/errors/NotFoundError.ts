import ApplicationError from "./ApplicationError";

class NotFoundError extends ApplicationError {
  messages?: string[];
  status = 404;

  constructor() {
    super();
    this.message = "Not found";
  }
}

export default NotFoundError;
