import { Router } from "express";
import middlewares from "../middlewares";
import { createRealEstateSchema } from "../schemas";
import { realEstateController } from "../controllers";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(createRealEstateSchema),
  realEstateController.create
);

realEstateRouter.get("", realEstateController.read);
