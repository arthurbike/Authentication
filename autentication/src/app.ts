import { json } from "express";
import express from "express";
import { listUsersRoute } from "./routes/list-users";
import { createUserRoute } from "./routes/create-user";

const app = express();

app.use(json());

// middlewares

// routes
app.use(createUserRoute);
app.use(listUsersRoute);

export { app };
