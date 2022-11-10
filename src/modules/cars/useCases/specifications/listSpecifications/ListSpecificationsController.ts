import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from '../../specifications/listSpecifications/ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {

  }

  handle(request: Request, response: Response): Response {

  const result = this.listSpecificationsUseCase.execute();

  return response.json(result);
  }
}

export { ListSpecificationsController }