import { Request, Response } from "express";
import { scheduleService } from "../services";
import { ScheduleReturn, Schedules } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const tokenId = res.locals.decoded;
  await scheduleService.create(req.body, tokenId);

  return res.status(201).json({ message: "Schedule created" });
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const schedules = await scheduleService.read(Number(req.params.id));
  return res.status(200).json(schedules);
};

export default { create, read };
