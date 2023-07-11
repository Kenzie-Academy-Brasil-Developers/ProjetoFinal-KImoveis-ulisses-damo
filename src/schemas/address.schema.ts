import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional().nullable(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const addressReturnSchema = addressSchema.omit({ id: true });

export { addressReturnSchema, addressSchema };
