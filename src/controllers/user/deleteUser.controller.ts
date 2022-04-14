import { Request, Response } from "express";
import { deleteUserService } from "../../services";

const deleteUserController = async (req: Request, res: Response) => {
  const user = await deleteUserService(req);

  if (!user) {
    return res.status(401).json({ message: "Missing admin permissions" });
  } else if (Object.values(user).length === 0) {
    return res.status(401).json({ message: "User not found" });
  }

  return res.status(200).json({ message: "User deleted with success" });
};

export default deleteUserController;
