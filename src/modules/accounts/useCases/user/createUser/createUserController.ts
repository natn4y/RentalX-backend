import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, driver_license } = request.body;

    const createUserController = container.resolve(CreateUserUseCase);

    try {
      await createUserController.execute({
        name,
        username,
        email,
        password,
        driver_license,
      });
      return response.status(201).send();
    } catch (e) {
      return response.status(400).json({ message: (e as Error).message });
    }
  }
}

export { CreateUserController }