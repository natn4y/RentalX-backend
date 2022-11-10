import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {

  }

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new Error('Specification already exists!')
    }

    if (!name) {
      throw new Error('Check the name of specification')
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService }
