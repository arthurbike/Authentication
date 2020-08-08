import { getRepository, Repository } from "typeorm";
import { User } from "../entity/User";

export let userRepository: Repository<User> = getRepository(User);
export { User };
