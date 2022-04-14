import { Request, Response } from "express";
import { updateUserService } from "../../services";

const updateUserController = async (req: Request, res: Response) => {
  const user = await updateUserService(req);

  if (user === "Unauthorized") {
    return res.status(401).json({ message: "Can't update isAdm field" });
  }

  return res.status(200).json(user);
};

export default updateUserController;
