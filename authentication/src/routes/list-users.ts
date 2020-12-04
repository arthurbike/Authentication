import { Request, Response, Router } from "express";
import { getConnection } from "typeorm";
import { authentication } from "../middlewares/auth";
import { userRepository } from "../repositories";
import { User } from "../entities/users/User";

const router = Router();

router.get("/users", authentication, async (req: Request, res: Response) => {
  // const users = await getConnection()
  //   .createQueryBuilder()
  //   .select(["user.id", "user.email"])
  //   .from(User, "user")
  //   .limit(10)
  //   .getMany();

  const users = await userRepository.find();

  return res.status(200).send(users);
});

export { router as listUsersRoute };
