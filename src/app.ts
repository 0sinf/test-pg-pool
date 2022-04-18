import "reflect-metadata";
import express from "express";

import userRouter from "./controller/users";
import postRouter from "./controller/posts";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(3000, () => {
  console.log("Start App");
});
