import { Router, Request, Response } from "express";
import { Container } from "typedi";
import UserRepository from "../model/UserRepository";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  console.log("POST /users");
  const { email, age } = req.body;
  const userRepository = Container.get(UserRepository);
  const result = userRepository.save(email, age);
  res.status(201).json(result);
});

export default router;
