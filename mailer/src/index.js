require("./app");

if (!process.env.SMTP_PORT) {
  throw new Error("Enviroment variable SMTP_PORT not setted");
}

if (!process.env.SERVER_PORT) {
  throw new Error("Enviroment variable SERVER_PORT not setted");
}
