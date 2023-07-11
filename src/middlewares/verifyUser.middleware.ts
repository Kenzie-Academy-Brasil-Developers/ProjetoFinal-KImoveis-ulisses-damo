import { NextFunction, Request, Response } from "express";
import { scheduleRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userToken = Number(res.locals.decoded.sub);
  const { date, hour } = req.body;
  
  const schedule = await scheduleRepository
  .createQueryBuilder("schedules")
  .where("schedules.userId = :userId", { userId: userToken })
  .andWhere("schedules.date = :scheduleDate", { scheduleDate: date })
  .andWhere("schedules.hour = :scheduleHour", { scheduleHour: hour })
  .getOne();
  
  if (schedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
      );
    }

  return next();
};
