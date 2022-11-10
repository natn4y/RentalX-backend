import { ICategoriesRepository } from '../../../repositories/types/ICategoriesRepository';

interface IRequest {
  name: string
  description: string
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {

  }

  execute({ description, name }: IRequest ) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    if (name === '') {
      throw new Error("Check category name!")
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }