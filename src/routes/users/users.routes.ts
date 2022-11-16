import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from '../../modules/accounts/useCases/user/createUser/createUserController';
import { ListUsersController } from '../../modules/accounts/useCases/user/listUsers/listUsersController';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';
import { UpdateUserAvatarController } from '../../modules/accounts/useCases/user/updateUserAvatar/updateUserAvatarController';
import uploadConfig from '../../config/upload';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload());

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const updateUsersAvatarController = new UpdateUserAvatarController()

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', ensureAuthenticated, listUsersController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUsersAvatarController.handle
);

export { usersRoutes }