import { getRepository } from "typeorm";
import { Client } from "../entities/Clients";

type ClientRequest = {
  name: string;
  id_fiscal: string;
  data_nascimento: Date;
};

export class CreateClientService {
  async execute({ name, id_fiscal, data_nascimento }: ClientRequest): Promise<Error | Client> {
    const repo = getRepository(Client);

    if ((await repo.findOne(id_fiscal))) return new Error("Client already exists!");

    const client = repo.create({ name, id_fiscal, data_nascimento });

    await repo.save(client);

    return client;
  }
}
