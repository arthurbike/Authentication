import { config } from "dotenv";
import bcrypt from "bcrypt";
import { getRepository } from "typeorm";
import { Request, Response, Router } from "express";
import { body } from "express-validator";
import { User } from "../entities/users/User";
import UnauthorizedError from "../errors/UnauthorizedError";
import BadRequestError from "../errors/BadRequestError";
import { createToken } from "../utils/createToken";
config();

const router = Router();

router.post(
  "/user/login",
  [
    body("email").notEmpty().withMessage("Empty email"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Empty password"),
  ],
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await getRepository(User).findOne({ where: { email } });

    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        throw new UnauthorizedError("Invalid password");
      }

      user.token = createToken({ id: user.id, email: user.email });

      return res
        .status(200)
        .cookie("accessToken", user.token)
        .send({ accessToken: user.token });
    }

    throw new BadRequestError("Invalid account");
  }
);

export { router as loginRouter };
