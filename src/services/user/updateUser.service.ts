import { Request } from "express";
import { IUser, UserRepository } from "../../repositories";

const updateUserService = async (req: Request) => {
  const { uuid } = req.params;

  const userIsAdm: IUser = await new UserRepository().findByEmail(req.email);
  const user: IUser = await new UserRepository().findByUuid(uuid);

  if (!user) {
    return {};
  } else if (!userIsAdm) {
    return "Invalid token";
  } else if (userIsAdm.email !== user.email && userIsAdm.isAdm === false) {
    return undefined;
  }

  const update = {
    ...req.body,
  };

  if (update.isAdm) {
    return "Incorrect field";
  }

  for (let key in update) {
    user[key] = update[key];
  }

  user.updateadOn = Date();
  delete user.password;

  const updateSave = await new UserRepository().saveUser(user);

  return updateSave;
};

export default updateUserService;
