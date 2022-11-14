import { Request, Response } from 'express'
import { Category } from '../../../entities/Category';
import { container } from 'tsyringe';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description }: Category = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

    try {
      await createCategoryUseCase.execute({ name, description });
    } catch (e) {
      return response.status(400).json({ message: (e as Error).message });
    }
    return response.status(201).send();
  }
}

export { CreateCategoryController }