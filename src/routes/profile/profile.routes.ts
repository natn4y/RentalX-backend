import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/resetPasswordUserController";
import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const ProfilePasswordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetPasswordController = new ResetPasswordUserController();

ProfilePasswordRoutes.post(
  "/PasswordForgot",
  sendForgotPasswordMailController.handle
);

ProfilePasswordRoutes.post("/PasswordReset", resetPasswordController.handle);

export { ProfilePasswordRoutes };
