import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';
import { IUsersRepository } from '../types/IUsersRepository';
import { ICreateUserDTO } from '../types/IUsersRepository'

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor () {
    this.repository = getRepository(User);
  }

  async findByUserName(username: string): Promise<User> {
    const user = await this.repository.findOne({username})

    return user;
  }

  async create({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = await this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }

   async list() {
    const user = this.repository.find();
    return user;
  }


}

export { UserRepository }