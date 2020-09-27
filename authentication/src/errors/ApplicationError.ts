abstract class ApplicationError extends Error {
  abstract status: number;

  constructor(message?: string) {
    super(message);
  }
}

export default ApplicationError;
