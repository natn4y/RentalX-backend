import { container } from "tsyringe";

import { UserRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/types/IUsersRepository";
import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/types/ICategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/repositories/implementations/SpecificationRepository";
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
