import { DeleteResult } from "typeorm";
import { User } from "../../entities/User";

interface IUserRepo {
  saveUser: (user: User) => Promise<User>;
  findUser: () => Promise<User[]>;
  findByEmail: (email: string) => Promise<User>;
  findByUuid: (uuid: string) => Promise<User>;
  deleteUser: (user: User) => Promise<DeleteResult>;
}

export { IUserRepo };
