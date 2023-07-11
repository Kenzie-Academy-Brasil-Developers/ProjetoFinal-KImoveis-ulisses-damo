import { Router } from "express";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import { categoryController } from "../controllers";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(categoryCreateSchema),
  middlewares.uniqueCategory,
  categoryController.create
);

categoryRouter.get("", categoryController.read);
categoryRouter.get("/:id/realEstate",  categoryController.retrieve);
