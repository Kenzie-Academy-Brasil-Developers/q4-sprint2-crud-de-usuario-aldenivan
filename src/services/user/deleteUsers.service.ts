import { Request } from "express";
import { IUser, UserRepository } from "../../repositories";

const deleteUserService = async (req: Request) => {
  const { uuid } = req.params;

  const userIsAdm: IUser = await new UserRepository().findByEmail(req.email);
  const user: IUser = await new UserRepository().findByUuid(uuid);

  if (!user) {
    return {};
  } else if (!userIsAdm) {
    return undefined;
  } else if (userIsAdm.email !== user.email && userIsAdm.isAdm === false) {
    return undefined;
  }

  const deleteUser = await new UserRepository().deleteUser(user);

  return user;
};

export default deleteUserService;
