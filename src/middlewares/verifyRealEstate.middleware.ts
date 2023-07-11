import { NextFunction, Request, Response } from "express";
import { scheduleRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyRealEstateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { date, hour } = req.body;

  const schedule = await scheduleRepository
    .createQueryBuilder("schedules")
    .where("schedules.date = :scheduleDate", { scheduleDate: date })
    .andWhere("schedules.hour = :scheduleHour", { scheduleHour: hour })
    .getOne();

  if (schedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};
