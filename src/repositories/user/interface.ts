import { DeleteResult } from "typeorm";

interface IUser {
  uuid: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  createadOn: string;
  updateadOn: string;
}

interface IUserRepo {
  saveUser: (user: IUser) => Promise<IUser>;
  findUser: () => Promise<IUser[]>;
  findByEmail: (email: string) => Promise<IUser>;
  findByUuid: (uuid: string) => Promise<IUser>;
  deleteUser: (user: IUser) => Promise<DeleteResult>;
}

export { IUser, IUserRepo };
