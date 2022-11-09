import { ICategoriesRepository } from '../repositories/ICategoriesRepositories';

class ListCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {

  }

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesService }