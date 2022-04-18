import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";

import userRouter from "./controller/users";
import postRouter from "./controller/posts";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(3000, () => {
  console.log("Start App");
});
