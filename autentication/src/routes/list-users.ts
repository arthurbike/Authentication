import { Request, Response, Router } from "express";
import { userRepository } from "../repositories";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

const router = Router();

router.get("/user", async (req: Request, res: Response) => {
  return res.status(200).send(await getRepository(User).find());
});

export { router as listUsersRoute };
