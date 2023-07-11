import { z } from "zod";
import { addressReturnSchema } from "./address.schema";
import { categorySchema } from "./category.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().default(0).or(z.string()),
  size: z.number().gt(0),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  address: addressReturnSchema,
  categoryId: z.number(),
});

const createRealEstateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const realEstateReturnSchema = realEstateSchema.omit({});
const realEstateReadSchema = realEstateReturnSchema.array();

export {
  realEstateReadSchema,
  realEstateReturnSchema,
  createRealEstateSchema,
  realEstateSchema,
};
