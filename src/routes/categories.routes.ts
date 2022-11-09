import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

// MODEL --->
import { Category } from '../model/Category';
// MODEL <---

const categories = [] as Array<Category>;

categoriesRoutes.post('/', (request, response) => {
  const { name, description }: Category = request.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  })

  categories.push(category);

  return response.status(201).json({category});
});

export { categoriesRoutes };