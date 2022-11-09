import { Category } from '../model/Category';

// DTO - Data transfer object -->
interface ICreateCategoryDTO {
  name: string
  description:  string
}
// DTO - Data transfer object <--

class CategoriesRepository {
  private categories: Array<Category>;

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    })

    this.categories.push(category)
  }

  list(): Array<Category> {
    return this.categories;
  };

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
}

export { CategoriesRepository }
