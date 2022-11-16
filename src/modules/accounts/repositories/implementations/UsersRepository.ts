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

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email})

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({id})

    return user
  }

  async create({
    name,
    username,
    email,
    driver_license,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = await this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

   async list() {
    const user = this.repository.find();
    const userFiltered = await (await user).map(user => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        driver_license: user.driver_license,
        isAdmin: user.isAdmin,
        create_at: user.create_at,
        avatar: user.avatar
      }
    })

    return userFiltered as User[];
  }


}

export { UserRepository }