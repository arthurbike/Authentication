import { Result, ValidationError } from "express-validator";
import ApplicationError from "./ApplicationError";

class ValidationErrors extends ApplicationError {
  status = 400;
  messages: string[];

  constructor(result: Result<ValidationError>) {
    super();
    this.message = "Invalid form data";
    this.messages = result.array().map((error) => error.msg);
    console.log(JSON.stringify(this.messages));
  }
}

export default ValidationErrors;
