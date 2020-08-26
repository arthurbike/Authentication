import { getRepository, Repository } from "typeorm";
import { User } from "../entities/users/User";

export let userRepository: Repository<User> = getRepository(User);
export { User };
