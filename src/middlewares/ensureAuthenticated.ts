import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string
}

async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token Missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, '5a710ea6392023eb43782fd34661056d') as IPayload;

    const usersRepository =  new UserRepository();
    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new Error('Invalid token!')
    }

    next()
  } catch (error) {
    throw new Error('Invalid Token');
  }
}

export { ensureAuthenticated }