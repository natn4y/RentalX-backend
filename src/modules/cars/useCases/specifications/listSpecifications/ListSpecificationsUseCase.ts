import { ISpecificationsRepository } from '../../../repositories/types/ISpecificationsRepository';
class ListSpecificationsUseCase {
  constructor(private SpecificationsRepository: ISpecificationsRepository) {

  }

  execute() {
    return this.SpecificationsRepository.list();
  }
}

export { ListSpecificationsUseCase }