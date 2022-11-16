import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUsersCaseCase } from './listUsersUseCase';

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersCaseCase);
      const users = await listUsersUseCase.execute();
      return response.json(users);
  }
}

export { ListUsersController }