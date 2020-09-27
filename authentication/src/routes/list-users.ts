import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/users/User";

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  const remapedUsers = (await getRepository(User).find()).map((user) => {
    return {
      id: user.id,
      email: user.email,
    };
  });

  return res.status(200).send(remapedUsers);
});

export { router as listUsersRoute };
