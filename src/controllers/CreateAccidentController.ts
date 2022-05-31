import { Request, Response } from "express";
import { CreateAccidentService } from "../services/CreateAccidentService";

export class CreateAccidentController {
  async handle(req: Request, res: Response) {
    const { id_fiscal, veiculo_placa, descricao, endereco } = req.body;

    const service = new CreateAccidentService();

    const result = await service.execute({
      id_fiscal,
      veiculo_placa,
      descricao,
      endereco
    });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}
