import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../../repositories/types/ISpecificationsRepository';
import { AppError } from '../../../../../errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
    ) {}

  async execute({ name, description }: IRequest):Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new AppError('Specification already exists!');
    }

    if (!name) {
      throw new AppError('Check the name of specification');
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
