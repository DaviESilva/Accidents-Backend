import { Request, Response } from "express";
import { CreateClientService } from "../services/CreateClientService";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const { name, id_fiscal, data_nascimento } = req.body;

    const service = new CreateClientService();

    const result = await service.execute({
      name,
      id_fiscal,
      data_nascimento
    });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}
