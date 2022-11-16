import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../../repositories/types/IUsersRepository'

import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject ('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Verificar se o Usuário existe
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect!')
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email or password incorrect!')
    }

    // Gerar jsonwebtoken
    const token = sign({}, '5a710ea6392023eb43782fd34661056d', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase }