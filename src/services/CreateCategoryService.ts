import { CategoriesRepository } from '../repositories/CategoriesRepositories';

interface IRequest {
  name: string
  description: string
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {

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

export { CreateCategoryService }