import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema } from "../schemas";
import { userController } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  userController.create
);
userRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  userController.read
);

userRouter.patch(
  "/:id",
  middlewares.userIdExists,
  middlewares.verifyToken,
  middlewares.isAdminOrOwner,
  userController.update
);

userRouter.delete(
  "/:id",
  middlewares.userIdExists,
  middlewares.verifyToken,
  middlewares.isAdmin,
  userController.destroy
);
