import { Router } from "express";

import { carsCategoriesRoutes } from "./cars/categories.routes";
import { carsSpecificationsRoutes } from "./cars/specifications.routes";
import { authenticateRoutes } from "./users/authenticate.routes";
import { usersRoutes } from "./users/users.routes";

const router = Router();

router.use("/cars/categories", carsCategoriesRoutes);
router.use("/cars/specifications", carsSpecificationsRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
