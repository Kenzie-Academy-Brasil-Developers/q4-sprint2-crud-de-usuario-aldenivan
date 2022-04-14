import { Request, Response } from "express";
import { getUsersService } from "../../services";

const getUserController = async (req: Request, res: Response) => {
  const users = await getUsersService(req);

  if (!users) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return res.status(200).json(users);
};

export default getUserController;
