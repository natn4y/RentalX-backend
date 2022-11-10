import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

class ListSpecificationsService {
  constructor(private specificationsRepository: ISpecificationsRepository) {

  }

  execute() {
    return this.specificationsRepository.list();
  }
}

export { ListSpecificationsService }