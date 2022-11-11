import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../../modules/cars/useCases/category/createCategory';
import { importCategoryController } from '../../modules/cars/useCases/category/importCategory';
import { listCategoriesController } from '../../modules/cars/useCases/category/listCategory';

const carsCategoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

carsCategoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

carsCategoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

carsCategoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request, response) => {
    return importCategoryController.handle(
      request,
      response,
    )
  },
)

export { carsCategoriesRoutes };