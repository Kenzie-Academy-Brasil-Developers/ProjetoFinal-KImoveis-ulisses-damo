import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { User } from "../entities";
import { userRepository } from "../repositories";

export const userIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundEntity: User | null = await userRepository.findOneBy({ id });
  if (!foundEntity) {
    throw new AppError("User not found", 404);
  }

  res.locals = { ...res.locals, foundEntity };

  return next();
};
