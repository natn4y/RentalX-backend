import { Request, Response } from "express";
import { container } from "tsyringe";

import { Specification } from "../../../entities/Specification";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description }: Specification = request.body;
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    );
    const result = await createSpecificationUseCase.execute({
      name,
      description,
    });
    return response.json(result), response.status(201).send();
  }
}

export { CreateSpecificationController };
