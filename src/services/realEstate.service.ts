import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import {
  RealEstateCreate,
  RealEstateRead,
  RealEstateReturn,
} from "../interfaces";
import {
  addressRepository,
  categoryRepository,
  realEstateRepository,
} from "../repositories";
import { realEstateReturnSchema } from "../schemas";

const create = async (payload: RealEstateCreate): Promise<RealEstate> => {
  const address: Address = addressRepository.create(payload.address as Address);
  const CreateAddress = await addressRepository.save(address);
  
  const findCategory: Category | null = await categoryRepository.findOneBy({
    id: payload.categoryId,
  });
  if (!findCategory) {
    throw new AppError("");
  }
  

  const realEstate: RealEstate = realEstateRepository.create({
    ...payload,
    address: CreateAddress,
    category: findCategory,
  });

  await realEstateRepository.save(realEstate);

  return realEstate;
};

const read = async (): Promise<RealEstate[]> => {
  const realEstate: Array<RealEstate> | undefined =
    await realEstateRepository.find({ relations: { address: true } });

  return realEstate;
};

export default { create, read };
