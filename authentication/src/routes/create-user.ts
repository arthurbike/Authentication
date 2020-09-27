import { Request, Response, Router } from "express";
import { User } from "../entities/users/User";
import { body, validationResult } from "express-validator";
import { hashSync } from "bcrypt";
import { uuid } from "uuidv4";
import { getRepository } from "typeorm";
import BadRequestError from "../errors/BadRequestError";

const router = Router();

router.post(
  "/user",
  [
    body("name").optional().isLength({ min: 6 }).withMessage("Min length: 6"),
    body("email").isEmail().withMessage("Invalid email"),
    body("email").notEmpty().withMessage("Empty email"),
    body("password").notEmpty().withMessage("Empty password"),
    body("password").isLength({ min: 8 }).withMessage("Min length: 8"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.send(errors);

    const { name, email, password } = req.body;

    const countEmail = await getRepository(User).count({ where: { email } });
    const emailAlreadyExists = countEmail > 0;

    if (emailAlreadyExists) {
      throw new BadRequestError("The email is already being used");
    }

    const user = new User();

    user.id = uuid();
    user.email = email;
    user.password = hashSync(password, 10);
    if (name) user.name = name;

    res.status(201).send(await getRepository(User).save(user));
  }
);

export { router as createUserRoute };
