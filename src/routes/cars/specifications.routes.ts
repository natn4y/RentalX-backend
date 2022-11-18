import { Router } from "express";

import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

import { CreateSpecificationController } from "../../modules/cars/useCases/specifications/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../../modules/cars/useCases/specifications/listSpecifications/ListSpecificationsController";

const carsSpecificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

const listSpecificationController = new ListSpecificationsController();

carsSpecificationsRoutes.post(
  "/",
  ensureAuthenticated,
  createSpecificationController.handle
);

carsSpecificationsRoutes.get("/", listSpecificationController.handle);

export { carsSpecificationsRoutes };
