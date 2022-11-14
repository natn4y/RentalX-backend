import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/types/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/types/ISpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)
