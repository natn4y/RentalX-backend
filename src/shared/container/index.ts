import { container } from "tsyringe";

import { UserRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/types/IUsersRepository";
import { CarsImagesRepository } from "@modules/cars/repositories/implementations/CarsImagesRepository";
import { CarsRepository } from "@modules/cars/repositories/implementations/CarsRepository";
import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/repositories/implementations/SpecificationRepository";
import { ICarsImagesRepository } from "@modules/cars/repositories/types/ICarsImagesRepository";
import { ICarsRepository } from "@modules/cars/repositories/types/ICarsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/types/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/types/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UserRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  "CarsImagesRepository",
  CarsImagesRepository
);
