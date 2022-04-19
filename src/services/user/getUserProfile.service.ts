import { Request } from "express";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories";

const getUserProfileService = async (req: Request) => {
  const user: User = await new UserRepository().findByEmail(req.email);

  if (!user) {
    return undefined;
  }

  delete user.password;

  return user;
};

export default getUserProfileService;
