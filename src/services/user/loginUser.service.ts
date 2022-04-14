import { Request } from "express";
import { IUser, UserRepository } from "../../repositories";
import { configs } from "../../configs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginUserService = async (req: Request) => {
  const { email, password } = req.body;

  const user: IUser = await new UserRepository().findByEmail(email);

  if (!user) {
    return undefined;
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return undefined;
  }

  let token = jwt.sign({ email: email }, configs.secretKey, {
    expiresIn: configs.expiresIn,
  });

  return token;
};

export default loginUserService;
