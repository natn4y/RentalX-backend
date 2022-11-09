import { CategoriesRepository } from '../repositories/CategoriesRepositories';

class ListCategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {

  }

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesService }