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

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category Already exists!" })
  }

  if (name === '') {
    return response.status(400).json({ error: "Check category name!" })
  }

  categoriesRepository.create({ name, description })

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const result = categoriesRepository.list();

  response.json(result);
});

export { categoriesRoutes };