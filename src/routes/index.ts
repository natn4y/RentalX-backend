import { Router } from "express";

import { carsRoutes } from "./cars/cars.routes";
import { carsCategoriesRoutes } from "./cars/categories.routes";
import { carsSpecificationsRoutes } from "./cars/specifications.routes";
import { rentalRoutes } from "./rental/rental.routes";
import { authenticateRoutes } from "./users/authenticate.routes";
import { usersRoutes } from "./users/users.routes";

const router = Router();

router.use("/cars/categories", carsCategoriesRoutes);
router.use("/cars/specifications", carsSpecificationsRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRoutes);
router.use(authenticateRoutes);

export { router };
