import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

class ListCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {

  }

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesService }