import { Request, Response } from "express";
import { userService } from "../services";
import { UserRead, UserReturn, UserUpdate } from "../interfaces";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userService.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const admin: boolean = res.locals.decoded.admin;
  const users: UserRead = await userService.read(admin);

  return res.status(200).json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const payload: UserUpdate = req.body;
  const founUser: User = res.locals.foundEntity;

  const user = await userService.update(founUser, payload);

  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userService.destroy(res.locals.founEntity);
  return res.status(204).json();
};

export default { create, read, update, destroy };
