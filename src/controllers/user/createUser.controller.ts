import { Request, Response } from "express";
import { createUserService } from "../../services";

const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req);

  if (!user) {
    return res.status(400).json({ message: "E-mail already registered" });
  }

  return res.status(201).json(user);
};

export default createUserController;
