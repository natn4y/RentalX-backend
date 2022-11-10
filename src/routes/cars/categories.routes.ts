import { Router } from 'express';

import { createCategoryController } from '../../modules/cars/useCases/category/createCategory';
import { listCategoriesController } from '../../modules/cars/useCases/category/listCategory';

const carsCategoriesRoutes = Router();

carsCategoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

carsCategoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { carsCategoriesRoutes };