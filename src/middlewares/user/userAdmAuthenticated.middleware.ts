import { NextFunction, Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const userAdmAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userAdm: IUser = await new UserRepository().findByEmail(req.email);

  const { uuid } = req?.params;

  if (!userAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (uuid) {
    const user: IUser = await new UserRepository().findByUuid(uuid);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    } else if (userAdm.email !== user.email && userAdm.isAdm === false) {
      return res.status(401).json({ message: "Missing admin permissions" });
    }

    req.user = user;
  } else if (!userAdm.isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return next();
};

export default userAdmAuthenticated;
