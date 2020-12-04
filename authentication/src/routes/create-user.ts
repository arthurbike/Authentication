import { uuid } from "uuidv4";
import { hash, hashSync } from "bcrypt";
import { getRepository } from "typeorm";
import { body } from "express-validator";
import { User } from "../entities/users/User";
import { createToken } from "../utils/createToken";
import { Request, Response, Router } from "express";
import { validateRequest } from "../middlewares/validationHandler";
import BadRequestError from "../errors/BadRequestError";

const router = Router();

router.post(
  "/user",
  [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("Name min length: 3"),
    body("email").notEmpty().withMessage("Empty email"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Empty password"),
    body("password").isLength({ min: 8 }).withMessage("Password min length: 8"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const countEmail = await getRepository(User).count({ where: { email } });
    const emailAlreadyExists = countEmail > 0;

    if (emailAlreadyExists) {
      throw new BadRequestError("The email is already being used");
    }

    const user = new User();

    user.id = uuid();
    user.email = email;
    user.password = await hash(password, 10);
    if (name) user.name = name;

    await getRepository(User).save(user);

    res
      .status(201)
      .cookie("accessToken", createToken({ id: user.id, email: user.email }))
      .send({ ok: true });
  }
);

export { router as createUserRoute };
