import { Router } from 'express';

// MODEL -->
import { Category } from '../model/Category';
// MODEL <--

// REPOSITORIES -->
import { CategoriesRepository } from '../repositories/CategoriesRepositories';
// REPOSITORIES <--

// SERVICES -->
import { CreateCategoryService } from '../services/CreateCategoryService';
import { ListCategoriesService } from '../services/ListCategoriesService';
// SERVICES <--

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description }: Category = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {

  const listCategoryService = new ListCategoriesService(categoriesRepository);

  const result = listCategoryService.execute();

  response.json(result);
});

export { categoriesRoutes };