import { Request, Response, Router } from "express";
import { userRepository } from "../repositories";
import { User } from "../entity/User";
import { hashSync } from "bcrypt";
import { uuid } from "uuidv4";
import { getRepository } from "typeorm";

const router = Router();

router.post("/user", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = new User();

  user.id = uuid();
  user.email = email;
  user.password = hashSync(password, 10);
  if (user.name) user.name = name;

  return res.status(201).send(await userRepository.save(user));
});

export { router as createUserRoute };
