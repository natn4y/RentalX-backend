import { Router } from 'express';
import { carsCategoriesRoutes } from './cars/categories.routes';
import { carsSpecificationsRoutes } from './cars/specifications.routes';
import { userRoutes } from './users/users.routes';

const router = Router();

router.use('/cars/categories', carsCategoriesRoutes);
router.use('/cars/specifications', carsSpecificationsRoutes);
router.use('/users', userRoutes)

export { router }