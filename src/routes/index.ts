import { Router } from 'express';
import { carsCategoriesRoutes } from './cars/categories.routes';
import { carsSpecificationsRoutes } from './cars/specifications.routes';

const router = Router();

router.use('/cars/categories', carsCategoriesRoutes);
router.use('/cars/specifications', carsSpecificationsRoutes);

export { router }