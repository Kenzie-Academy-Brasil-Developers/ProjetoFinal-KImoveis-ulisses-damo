import { z } from "zod";
import { scheduleCreateSchema, scheduleReturnSchema, schedulesRequest } from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleReturn = z.infer<typeof scheduleReturnSchema>;
type ScheduleRequest = z.infer<typeof schedulesRequest>
type Schedules = {
    message: string
} 

type ScheduleRead = Array<ScheduleReturn>;
type ScheduleRepo = Repository<Schedule>;

export { ScheduleCreate, ScheduleRepo, ScheduleRead, ScheduleReturn, ScheduleRequest, Schedules };
