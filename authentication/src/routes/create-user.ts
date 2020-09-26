import { Request, Response, Router } from "express";
import { User } from "../entities/users/User";
import { body, validationResult } from "express-validator";
import { hashSync } from "bcrypt";
import { uuid } from "uuidv4";
import { getRepository } from "typeorm";

const router = Router();

router.post(
  "/user",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("email").notEmpty().withMessage("Empty email"),
    body("password").notEmpty().withMessage("Empty password"),
    body("password").isLength({ min: 8 }).withMessage("Min length = 8"),
  ],
  async (req: Request, res: Response) => {
    //chain validator
    const errors = validationResult(req);
    if (errors) return res.send(errors);

    const { name, email, password } = req.body;
    const user = new User();

    user.id = uuid();
    user.email = email;
    user.password = hashSync(password, 10);
    if (name) user.name = name;

    return res.status(201).send(await getRepository(User).save(user));
  }
);

export { router as createUserRoute };
