import { Schedule } from "../entities";
import {
  ScheduleCreate,
  ScheduleRead,
  ScheduleRequest,
  ScheduleReturn,
} from "../interfaces";
import {
  realEstateRepository,
  scheduleRepository,
  userRepository,
} from "../repositories";
import { scheduleReturnSchema } from "../schemas";
import { User } from "../entities";
import { RealEstate } from "../entities";
import { AppError } from "../errors";

const create = async (
  payload: ScheduleRequest,
  tokenId: number
): Promise<void> => {
  const { hour, date, realEstateId } = payload;

  if (hour < "08:00" || hour > "18:00") {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  const actualDate = new Date(date).getDay();
  if (actualDate == 0 || actualDate == 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }
  const user = await userRepository.findOneBy({ id: tokenId });
  const realEstate = await realEstateRepository.findOneBy({ id: realEstateId });
  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const schedule = scheduleRepository.create({
    ...payload,
    realEstate: realEstate,
    user: user!,
  });

  await scheduleRepository.save(schedule);
};

const read = async (scheduleId: number): Promise<RealEstate | null> => {
  const schedules: RealEstate | null = await realEstateRepository.findOne({
    where: { id: scheduleId },
    relations: { schedules: { user: true }, address: true, category: true },
  });

  return schedules;
};

export default { create, read };
