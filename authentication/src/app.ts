import { json } from "body-parser";
import "express-async-errors";
import express, { Request, Response } from "express";
import { createUserRoute } from "./routes/create-user";
import { listUsersRoute } from "./routes/list-users";
import { loginRouter } from "./routes/login";
import { errorHandler } from "./middlewares/errorHandler";
import NotFoundError from "./errors/NotFoundError";

const app = express();

app.use(json());

app.use(createUserRoute);
app.use(listUsersRoute);
app.use(loginRouter);

app.all("*", async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
