import { Request } from "express";
import { UserRepository } from "../../repositories";

const deleteUserService = async (req: Request) => {
  const user = req.user;

  const deleteUser = await new UserRepository().deleteUser(user);

  return user;
};

export default deleteUserService;
