import { Request, Response } from 'express'
import { Category } from '../../../entities/Category';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {

  }

  handle(request: Request, response: Response): Response {
    const { name, description }: Category = request.body;

    this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController }