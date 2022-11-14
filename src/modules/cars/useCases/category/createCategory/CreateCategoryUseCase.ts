import { inject, injectable  } from 'tsyringe';

import { ICategoriesRepository } from '../../../repositories/types/ICategoriesRepository';

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
    ) {}

  async execute({ description, name }: IRequest ): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    if (name === '') {
      throw new Error("Check category name!")
    }

    await this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }