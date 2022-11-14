import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase);

    try {
      const result = await listSpecificationsUseCase.execute();
      return response.json(result);

    } catch (e) {
      return response.status(400).json({ message: (e as Error).message });
    }
  }
}

export { ListSpecificationsController }