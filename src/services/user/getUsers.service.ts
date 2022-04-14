import { Request } from "express";
import { IUser, UserRepository } from "../../repositories";

const getUsersService = async (req: Request) => {
  const user: IUser = await new UserRepository().findByEmail(req.email);
  const users: IUser[] = await new UserRepository().findUser();

  if (!user.isAdm) {
    return undefined;
  }

  return users;
};

export default getUsersService;
