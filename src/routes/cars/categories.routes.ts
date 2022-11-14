import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../../modules/cars/useCases/category/createCategory/CreateCategoryController';
import { importCategoryController } from '../../modules/cars/useCases/category/importCategory';
import { listCategoriesController } from '../../modules/cars/useCases/category/listCategory';

const carsCategoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController()

// createCategoryController.handle funciona como um Middleware, ele já possui o request e response
carsCategoriesRoutes.post('/', createCategoryController.handle)

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