import "reflect-metadata";
import "./database";
import { app } from "./app";

app;

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
