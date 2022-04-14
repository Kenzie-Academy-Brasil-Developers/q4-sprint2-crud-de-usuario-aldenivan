import { Repository, getRepository, DeleteResult } from "typeorm";
import { User } from "../../entities/User";
import { IUser, IUserRepo } from "./interface";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = async (user: IUser) => await this.ormRepository.save(user);
  findUser = async () => await this.ormRepository.find();
  findByEmail = async (email: string) => {
    return await this.ormRepository.findOne({ where: { email } });
  };
  findByUuid = async (uuid: string) => {
    return await this.ormRepository.findOne({ where: { uuid } });
  };
  deleteUser = async (user: IUser) => {
    return await this.ormRepository.delete(user);
  };
}

export { UserRepository, IUser };
