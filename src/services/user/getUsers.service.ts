import { IUser, UserRepository } from "../../repositories";

const getUsersService = async () => {
  const users: IUser[] = await new UserRepository().findUser();

  return users;
};

export default getUsersService;
