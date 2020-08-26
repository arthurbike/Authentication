import { createConnection } from "typeorm";
import { config } from "dotenv";
config();

const DB_PORT = (process.env.DB_PORT as unknown) as number;

createConnection({
  type: "postgres",
  host: process.env.DB_HOST,
  port: DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "authentication",
  synchronize: true,
  logging: false,
  entities: ["src/entities/**/*.ts"],
});
