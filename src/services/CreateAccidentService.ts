import { getRepository } from "typeorm";
import { Accident } from "../entities/Accidents";
import { Client } from "../entities/Clients";

type AccidentRequest = {
  id_fiscal: string,
  veiculo_placa: string,
  descricao: string,
  endereco: string,
};

export class CreateAccidentService {
  async execute({ id_fiscal, veiculo_placa, descricao, endereco }: AccidentRequest): Promise<Accident | Error> {
    const repo = getRepository(Accident);
    const repoClient = getRepository(Client);

    if (!(await repoClient.findOne(id_fiscal))) return new Error("Client does not exists!");

    const accident = repo.create({ id_fiscal, veiculo_placa, descricao, endereco });

    await repo.save(accident);

    return accident;
  }
}