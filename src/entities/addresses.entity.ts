import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RealEstate } from "./real_estate.entity";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, nullable: false })
  street: string;

  @Column({ length: 8, nullable: false })
  zipCode: string;

  @Column({ length: 7, nullable: true })
  number: string;

  @Column({ length: 20, nullable: false })
  city: string;

  @Column({ length: 2, nullable: false })
  state: string;

}
