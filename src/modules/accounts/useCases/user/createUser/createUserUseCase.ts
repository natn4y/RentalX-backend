import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO, IUsersRepository } from '../../../repositories/types/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({name, username, email, password, driver_license}: ICreateUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByUserName(username);

    if (userAlreadyExists) {
      throw new Error('Username already exists!')
    }

    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license
    })
  }
};

export { CreateUserUseCase }