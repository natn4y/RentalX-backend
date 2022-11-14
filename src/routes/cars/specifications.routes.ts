
import { Router } from 'express';

const carsSpecificationsRoutes = Router();

import { CreateSpecificationController } from '../../modules/cars/useCases/specifications/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../../modules/cars/useCases/specifications/listSpecifications/ListSpecificationsController';

const createSpecificationController = new CreateSpecificationController();

const listSpecificationController = new ListSpecificationsController();

carsSpecificationsRoutes.post('/', createSpecificationController.handle);

carsSpecificationsRoutes.get('/', listSpecificationController.handle)

export { carsSpecificationsRoutes }