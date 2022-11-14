import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '../../../repositories/types/ISpecificationsRepository'

interface IRequest {
  name: string
  description: string
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
      throw new Error('Specification already exists!')
    }

    if (!name) {
      throw new Error('Check the name of specification')
    }

    try {
      await this.specificationsRepository.create({
        name,
        description,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { CreateSpecificationUseCase }
