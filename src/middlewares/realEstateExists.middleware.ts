import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { RealEstate } from "../entities";
import { realEstateRepository } from "../repositories";

export const realEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundEntity: RealEstate | null = await realEstateRepository.findOneBy({
    id,
  });
  if (!foundEntity) {
    throw new AppError("RealEstate not found", 404);
  }

  res.locals = { ...res.locals, foundEntity };
  return next();
};
