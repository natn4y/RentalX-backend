import { Car } from "@modules/cars/entities/Car";

import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]>;
  findById(id: string): Promise<Car>; // Here
  // This
  updateAvailable(id: string, available: boolean): Promise<void>;
}

export { ICarsRepository };
