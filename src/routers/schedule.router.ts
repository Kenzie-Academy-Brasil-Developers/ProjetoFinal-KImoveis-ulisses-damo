import { Router } from "express";
import middlewares from "../middlewares";
import { scheduleCreateSchema } from "../schemas";
import { scheduleController } from "../controllers";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdminOrOwner,
  middlewares.idExists,
  middlewares.verifyUserMiddleware,
  middlewares.verifyRealEstateMiddleware,
  middlewares.validateBody(scheduleCreateSchema),
  scheduleController.create
);
scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.realEstateExists,
  scheduleController.read
);
