import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Client } from "./Clients";

@Entity("accidents")
export class Accident {
  @PrimaryColumn()
  id_accident: string;

  @Column()
  veiculo_placa: string;

  @Column()
  descricao: string;

  @Column()
  endereco: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: "id_fiscal" })
  id_fiscal: string;

  constructor() {
    if (!this.id_accident) this.id_accident = uuid()
  }
}


