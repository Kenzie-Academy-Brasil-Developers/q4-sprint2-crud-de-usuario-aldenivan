import { Request } from "express";
import { IUser, UserRepository } from "../../repositories";

const getUserProfileService = async (req: Request) => {
  const user: IUser = await new UserRepository().findByEmail(req.email);

  if (!user) {
    return undefined;
  }

  delete user.password;

  return user;
};

export default getUserProfileService;
