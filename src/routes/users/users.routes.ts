import { Router } from 'express';
import { CreateUserController } from '../../modules/accounts/useCases/user/createUser/createUserController';
import { ListUsersController } from '../../modules/accounts/useCases/user/listUsers/listUsersController';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';

const userRoutes = Router();

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()


userRoutes.post('/', ensureAuthenticated, createUserController.handle);
userRoutes.get('/', listUsersController.handle);

export { userRoutes }