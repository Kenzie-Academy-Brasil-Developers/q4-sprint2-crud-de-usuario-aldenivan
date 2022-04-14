import { Request } from "express";
import { UserRepository } from "../../repositories";

const updateUserService = async (req: Request) => {
  const user = req.user;

  const update = {
    ...req.body,
  };

  if (update.isAdm !== undefined) {
    return "Unauthorized";
  }

  for (let key in update) {
    user[key] = update[key];
  }

  user.updateadOn = new Date();
  delete user.password;

  const updateSave = await new UserRepository().saveUser(user);

  return updateSave;
};

export default updateUserService;
