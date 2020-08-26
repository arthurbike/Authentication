import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { compare } from "bcrypt";
import { getRepository } from "typeorm";
import { Request, Response, Router } from "express";
import { User } from "../entities/users/User";
config();

const router = Router();

router.post("/user/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getRepository(User).findOne({ where: { email } });

  if (user) {
    const isValidPassword = await compare(password, user.password);

    if (isValidPassword) {
      delete user.password;

      user.token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60,
      });
      await getRepository(User).save(user);
    }
  }

  return res.status(200).send({ accessToken: user.token });
});

export { router as loginRouter };
