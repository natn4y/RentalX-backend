import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "@modules/cars/repositories/types/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
