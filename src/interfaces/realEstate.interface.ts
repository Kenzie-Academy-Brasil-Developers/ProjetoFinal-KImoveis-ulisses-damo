import { z } from "zod";
import { realEstateReturnSchema, createRealEstateSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { RealEstate } from "../entities";

type RealEstateCreate = z.infer<typeof createRealEstateSchema>;
type RealEstateReturn = z.infer<typeof realEstateReturnSchema>;
type RealEstateRead = Array<RealEstateReturn>;

type RealEstateRepo = Repository<RealEstate>;

export { RealEstateCreate, RealEstateRepo, RealEstateRead, RealEstateReturn };
