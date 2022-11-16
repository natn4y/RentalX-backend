import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../../errors/AppError';

import { ICreateUserDTO, IUsersRepository } from '../../../repositories/types/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({name, username, email, password, driver_license}: ICreateUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByUserName(username);

    const userEmailAlreadyExists = await this.usersRepository.findByUserName(email);

    if (userAlreadyExists) {
      throw new AppError('Username already exists!')
    }

    if (userEmailAlreadyExists) {
      throw new AppError('Email already exists!')
    }

    const userHash = await hash(password, 8)

    await this.usersRepository.create({
      name,
      username,
      email,
      password: userHash,
      driver_license,
    })
  }
};

export { CreateUserUseCase }