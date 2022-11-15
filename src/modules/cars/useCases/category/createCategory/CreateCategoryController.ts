import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { Category } from '../../../entities/Category';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description }: Category = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

    try {
      await createCategoryUseCase.execute({ name, description });
      return response.status(200).send();
    } catch (e) {
      return response.status(400).json({ message: (e as Error).message });
    }
  }
}

export { CreateCategoryController }