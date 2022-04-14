import { Request, Response } from "express";
import { updateUserService } from "../../services";

const updateUserController = async (req: Request, res: Response) => {
  const user = await updateUserService(req);

  if (!user) {
    return res.status(401).json({ message: "Missing admin permissions" });
  } else if (user === "Invalid token") {
    return res.status(401).json({ message: "Invalid token" });
  } else if (user === "Incorrect field") {
    return res.status(401).json({ message: "Can't update isAdm field" });
  } else if (Object.values(user).length === 0) {
    return res.status(401).json({ message: "User not found" });
  }

  return res.status(200).json(user);
};

export default updateUserController;
