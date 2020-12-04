import "reflect-metadata";
import { app } from "./app";
import { Connection } from "typeorm";
import { connect } from "./repositories";
import "./utils/checkEnvironmentVariables";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

let database: Connection;

const start = async () => {
  try {
    database = await connect();
    app;

    app.listen(SERVER_PORT, () => {
      console.log(`Server listening on port ${SERVER_PORT}`);
    });
  } catch (err) {
    console.error(err);
    await finish();
  }
};

const finish = async () => {
  if (database) {
    await database.close();
  }
  process.exit();
};

start();
