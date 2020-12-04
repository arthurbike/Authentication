export default () => {
  if (!process.env.DB_HOST) {
    throw new Error("Enviroment variable DB_HOST not setted");
  }

  if (!process.env.DB_USER) {
    throw new Error("Enviroment variable DB_USER not setted");
  }

  if (!process.env.DB_PASSWORD) {
    throw new Error("Enviroment variable DB_PASSWORD not setted");
  }

  if (!process.env.DB_PORT) {
    throw new Error("Enviroment variable DB_PORT not setted");
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("Enviroment variable JWT_SECRET not setted");
  }
};
