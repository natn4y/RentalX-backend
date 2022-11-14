import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../../modules/cars/useCases/category/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../../modules/cars/useCases/category/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../../modules/cars/useCases/category/listCategory/ListCategoriesController';

const carsCategoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const importCategoryController = new ImportCategoryController()

// createCategoryController.handle funciona como um Middleware, ele já possui o request e response.
carsCategoriesRoutes.post('/', createCategoryController.handle)

carsCategoriesRoutes.get('/', listCategoriesController.handle);

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