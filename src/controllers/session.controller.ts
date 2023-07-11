import { Request, Response } from "express";
import { Sessionreturn } from "../interfaces";
import { sessionService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const token: Sessionreturn = await sessionService.create(req.body);
  return res.status(200).json(token);
};

export default { create };
