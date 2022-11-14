
import { Router } from 'express';
import { createSpecificationController } from '../../modules/cars/useCases/specifications/createSpecification';

import { listSpecificationsController } from '../../modules/cars/useCases/specifications/listSpecifications';

const carsSpecificationsRoutes = Router();

carsSpecificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
})

carsSpecificationsRoutes.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { carsSpecificationsRoutes }