import { z } from "zod";
import {
  categoryCreateSchema,
  categoryReadSchema,
  categoryReturnSchema,
} from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoyRead = z.infer<typeof categoryReadSchema>;
type CategoryReturn = z.infer<typeof categoryReturnSchema>;

type CategoryRepo = Repository<Category>;

export { CategoryCreate, CategoryRepo, CategoryReturn, CategoyRead };
