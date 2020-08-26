import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/users/User";

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  return res.status(200).send(await getRepository(User).find());
});

export { router as listUsersRoute };
