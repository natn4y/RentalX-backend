import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '../../../repositories/types/ISpecificationsRepository';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
    ) {}

  execute() {
    return this.specificationsRepository.list();
  }
}

export { ListSpecificationsUseCase }