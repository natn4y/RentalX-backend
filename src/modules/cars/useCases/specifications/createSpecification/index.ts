import { SpecificationsRepository } from '../../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationUseCase = new CreateSpecificationController(listSpecificationsUseCase);

export { createSpecificationUseCase };