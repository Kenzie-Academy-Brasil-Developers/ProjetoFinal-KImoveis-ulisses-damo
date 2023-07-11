import { z } from "zod";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const categoryCreateSchema = categorySchema.omit({ id: true });
const categoryReturnSchema = categorySchema;
const categoryReadSchema = categoryReturnSchema.array();

export {
  categoryCreateSchema,
  categorySchema,
  categoryReadSchema,
  categoryReturnSchema,
};
