import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from '../../entities/User'

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  findByUserName(username: string): Promise<User>
  findByEmail(email: string): Promise<User>
  list(): Promise<User[]>;
}

export { IUsersRepository, ICreateUserDTO }