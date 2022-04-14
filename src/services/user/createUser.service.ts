import { Request } from "express";
import { IUser, UserRepository } from "../../repositories";
import bcrypt from "bcrypt";

const createUserService = async (req: Request) => {
  const alreadyExist = await new UserRepository().findByEmail(req.body.email);

  if (alreadyExist) {
    return undefined;
  }

  req.body.password = await bcrypt.hash(req.body.password, 10);

  const user: IUser = await new UserRepository().saveUser(req.body);

  const showUser = req.body;
  delete showUser.password;

  return showUser;
};

export default createUserService;
