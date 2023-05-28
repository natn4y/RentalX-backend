import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { IUsersTokensRepository } from "@modules/accounts/dtos/IUsersTokensRepository";
import { IUsersRepository } from "@modules/accounts/repositories/types/IUsersRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordUserUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DayJsDateProvider")
    private dataProvider: IDateProvider,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ token, password }: IRequest): Promise<void> {
    const userToken = (await this.usersTokensRepository.findByRefreshToken(
      token
    )) as ICreateUserTokenDTO;

    if (!userToken) {
      throw new AppError("Token invalid!");
    }

    if (
      this.dataProvider.compareIfBefore(
        userToken.expires_date,
        this.dataProvider.dateNow()
      )
    ) {
      throw new AppError("Token expired!");
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    user.password = await hash(password, 8);

    await this.usersRepository.create(user);

    await this.usersTokensRepository.deleteById(userToken.id);
  }
}

export { ResetPasswordUserUseCase };
