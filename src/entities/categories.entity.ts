import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./real_estate.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, nullable: false, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (re) => re.category)
  realEstate: Array<RealEstate>;
}
