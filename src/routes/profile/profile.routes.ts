import { Router } from "express";

import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const ProfilePasswordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();

ProfilePasswordRoutes.post(
  "/PasswordForgot",
  sendForgotPasswordMailController.handle
);

export { ProfilePasswordRoutes };
