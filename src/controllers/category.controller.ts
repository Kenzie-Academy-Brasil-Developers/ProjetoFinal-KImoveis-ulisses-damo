import { Request, Response } from "express";
import { Category } from "../entities";
import { categoryService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoryService.create(req.body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const categories = await categoryService.read();
  return res.status(200).json(categories);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const category = await categoryService.retrieve(id);

  return res.status(200).json(category);
};

export default { create, read, retrieve };
