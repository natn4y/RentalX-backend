import { Router } from 'express';

// MODEL -->
import { Category } from '../model/Category';
// MODEL <--

// REPOSITORIES -->
import { CategoriesRepository } from '../repositories/CategoriesRepositories';
// REPOSITORIES <--

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description }: Category = request.body;

  categoriesRepository.create({ name, description })

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const result = categoriesRepository.list();

  response.json(result);
});

export { categoriesRoutes };