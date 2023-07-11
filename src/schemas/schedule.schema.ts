import { z } from "zod";
import { realEstateSchema } from "./realEstate.schema";
import { userReturnSchema, userSchema } from "./user.schema";
import { categoryCreateSchema } from "./category.schema";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
  userId: z.number(),
});

const schedulesRequest = scheduleSchema
  .omit({ id: true, userId: true, realEstateId: true })
  .extend({ realEstateId: z.number() });
const scheduleCreateSchema = scheduleSchema
  .omit({
    id: true,
    userId: true,
  })
  

const scheduleReturnSchema = scheduleSchema
  .omit({ realEstateId: true })
  .extend({ userId: userReturnSchema });

export { scheduleCreateSchema, scheduleReturnSchema, scheduleSchema,schedulesRequest };
