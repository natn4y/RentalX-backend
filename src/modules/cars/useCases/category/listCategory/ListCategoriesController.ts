import { container } from 'tsyringe';
import { Request, Response } from 'express'

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {

  const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)

  try {
    const result = await listCategoriesUseCase.execute();
    return response.json(result);
  } catch (e) {
    return response.status(400).json({ message: (e as Error).message });
  }
  }
}

export { ListCategoriesController }