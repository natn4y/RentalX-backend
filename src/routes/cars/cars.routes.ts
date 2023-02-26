import { Router } from "express";
import multer from "multer";

import { ensureAdmin } from "@middlewares/ensureAdmin";
import { ensureAuthenticated } from "@middlewares/ensureAuthenticated";
import { CreateCarController } from "@modules/cars/useCases/car/createCar/createCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/car/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/car/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "@modules/cars/useCases/car/uploadCarImage/UploadCarImagesController";

import uploadConfig from "../../config/upload";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImageController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload("./tmp/cars"));

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle
);

carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImageController.handle
);

export { carsRoutes };
