import { Request, Response } from "express";
import { getUsersService } from "../../services";

const getUserController = async (_: Request, res: Response) => {
  const users = await getUsersService();

  return res.status(200).json(users);
};

export default getUserController;
