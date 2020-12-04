import { createConnection, Repository } from "typeorm";
import { config } from "dotenv";
import { getRepository } from "typeorm";
import { User } from "../entities/users/User";
config();

const DB_PORT = Number(process.env.DB_PORT);

export let userRepository: Repository<User>;

export const connect = async () => {
  const database = await createConnection({
    type: "postgres",
    host: process.env.DB_HOST,
    port: DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "authentication",
    synchronize: true,
    logging: false,
    entities: [User],
  });

  userRepository = getRepository(User);

  return database;
};
