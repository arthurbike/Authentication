abstract class ApplicationError extends Error {
  abstract status: number;
  abstract messages?: string[];

  constructor(message?: string) {
    super(message);
  }
}

export default ApplicationError;
