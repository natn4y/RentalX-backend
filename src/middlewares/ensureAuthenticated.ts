import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auth from "@config/auth";
import { AppError } from "@errors/AppError";
import { UserRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/repositories/implementations/UsersTokensRepository";

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token Missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    request.user = { id: user_id };

    next();
  } catch (error) {
    throw new AppError("Invalid Token!", 401);
  }
}

export { ensureAuthenticated };
