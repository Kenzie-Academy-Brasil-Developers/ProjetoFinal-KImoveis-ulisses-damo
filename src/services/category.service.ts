import { Category } from "../entities";
import { AppError } from "../errors";
import { CategoryCreate, CategoryReturn, CategoyRead } from "../interfaces";
import { categoryRepository } from "../repositories";
import { categoryReturnSchema } from "../schemas";

const create = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);

  return category;
};

const read = async (): Promise<CategoyRead> => {
  const categories: Array<Category> = await categoryRepository
    .createQueryBuilder("c")
    .leftJoinAndSelect("c.realEstate", "re")
    .getMany();

  return categoryReturnSchema.array().parse(categories);
};

const retrieve = async (categoryId: number): Promise<Category> => {
  const category: Category | null = await categoryRepository
    .createQueryBuilder("c")
    .leftJoinAndSelect("c.realEstate", "re")
    .where("c.id = :categoryId", { categoryId })
    .getOne();

  if (!category) throw new AppError("Category not found", 404);

  return category;
};

export default { create, read, retrieve };
