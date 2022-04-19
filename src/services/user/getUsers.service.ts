import { User } from "../../entities/User";
import { UserRepository } from "../../repositories";

const getUsersService = async () => {
  const users: User[] = await new UserRepository().findUser();

  return users;
};

export default getUsersService;
