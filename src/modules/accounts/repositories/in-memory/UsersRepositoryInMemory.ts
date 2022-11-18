import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../types/IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    driver_license,
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      driver_license,
      email,
      name,
      password,
    });

    this.users.push(user);
  }

  async findByUserName(username: string): Promise<User> {
    return this.users.find((user) => user.username === username);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async list(): Promise<User[]> {
    return this.users;
  }
}

export { UsersRepositoryInMemory };
