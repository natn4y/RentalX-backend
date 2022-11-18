import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../config/upload";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

import { CreateUserController } from "../../modules/accounts/useCases/user/createUser/createUserController";
import { ListUsersController } from "../../modules/accounts/useCases/user/listUsers/listUsersController";
import { UpdateUserAvatarController } from "../../modules/accounts/useCases/user/updateUserAvatar/updateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload());

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUsersAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", ensureAuthenticated, listUsersController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUsersAvatarController.handle
);

export { usersRoutes };
