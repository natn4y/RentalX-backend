import { Router } from "express";
import { ensureAdmin } from "middlewares/ensureAdmin";
import multer from "multer";

import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { CreateCategoryController } from "../../modules/cars/useCases/category/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../modules/cars/useCases/category/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../../modules/cars/useCases/category/listCategory/ListCategoriesController";

const carsCategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

carsCategoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
);

carsCategoriesRoutes.get("/", listCategoriesController.handle);

carsCategoriesRoutes.post(
  "/import",
  upload.single("file"),
  ensureAuthenticated,
  ensureAdmin,
  (request, response) => {
    return importCategoryController.handle(request, response);
  }
);

export { carsCategoriesRoutes };
