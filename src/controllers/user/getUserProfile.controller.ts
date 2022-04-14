import { Request, Response } from "express";
import { getUserProfileService } from "../../services";

const getUserProfileController = async (req: Request, res: Response) => {
  const user = await getUserProfileService(req);

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return res.status(200).json(user);
};

export default getUserProfileController;
