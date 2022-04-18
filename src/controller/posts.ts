import { Router, Request, Response } from "express";
import { Container } from "typedi";
import PostRepository from "../model/PostRepository";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  console.log("POST /posts");
  const { title, description } = req.body;
  const postRepository = Container.get(PostRepository);
  const result = postRepository.save(title, description);
  res.status(201).json(result);
});

export default router;
