import "reflect-metadata";
import "./database";
import { app } from "./app";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app;

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

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
