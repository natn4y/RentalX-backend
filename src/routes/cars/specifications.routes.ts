
import { Router } from 'express';
import { createSpecificationUseCase } from '../../modules/cars/useCases/specifications/createSpecification';

import { listSpecificationsController } from '../../modules/cars/useCases/specifications/listSpecifications';

const carsSpecificationsRoutes = Router();

carsSpecificationsRoutes.post('/', (request, response) => {
  return createSpecificationUseCase.handle(request, response);
})

carsSpecificationsRoutes.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { carsSpecificationsRoutes }