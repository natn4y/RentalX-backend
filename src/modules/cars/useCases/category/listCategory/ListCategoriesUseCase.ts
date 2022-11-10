import { ICategoriesRepository } from '../../../repositories/types/ICategoriesRepository';
class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {

  }

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase }