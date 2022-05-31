import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  name: string;

  @Column()
  id_fiscal: string;

  @CreateDateColumn()
  data_nascimento: Date;

  @Column()
  id_accident: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
