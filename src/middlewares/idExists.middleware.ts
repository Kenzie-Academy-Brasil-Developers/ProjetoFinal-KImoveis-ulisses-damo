import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { AppError } from "../errors";

export const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(res.locals.decoded.sub);

  const foundEntity: User | null = await userRepository.findOneBy({ id });
  if (!foundEntity) {

    throw new AppError("User not found", 404);
  }

  res.locals = { ...res.locals, foundEntity };

  return next();
};
