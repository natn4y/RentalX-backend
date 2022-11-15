import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUsersCaseCase } from './listUsersUseCase';

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersCaseCase);

    try {
      const users = await listUsersUseCase.execute();
      return response.json(users);
    } catch (e) {
      return response.status(400).json({ message: (e as Error).message });
    }
  }
}

export { ListUsersController }