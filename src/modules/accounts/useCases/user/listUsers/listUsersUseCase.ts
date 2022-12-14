import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/types/IUsersRepository";

@injectable()
class ListUsersCaseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute() {
    return this.usersRepository.list();
  }
}

export { ListUsersCaseCase };
