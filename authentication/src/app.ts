import express from "express";
import { listUsersRoute } from "./routes/list-users";
import { createUserRoute } from "./routes/create-user";
import { loginRouter } from "./routes/login";

const app = express();

// config middlewares
app.use(express.json());

// middlewares

// routes
app.use(createUserRoute);
app.use(listUsersRoute);
app.use(loginRouter);

export { app };
