import { Request, Response } from "express";
import { deleteUserService } from "../../services";

const deleteUserController = async (req: Request, res: Response) => {
  const user = await deleteUserService(req);

  return res.status(200).json({ message: "User deleted with success" });
};

export default deleteUserController;
