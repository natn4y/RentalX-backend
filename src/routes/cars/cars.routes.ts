import { Router } from "express";
import { ensureAdmin } from "middlewares/ensureAdmin";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";

import { CreateCarController } from "@modules/cars/useCases/car/createCar/createCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/car/listAvailableCars/ListAvailableCarsController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);

export { carsRoutes };
