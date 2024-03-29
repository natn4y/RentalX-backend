import { NextFunction, Request, Response } from "express";

import { UserRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "@shared/errors/AppError";

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const usersRepository = new UserRepository();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError("User isn't admin!");
  }

  return next();
}

export { ensureAdmin };
