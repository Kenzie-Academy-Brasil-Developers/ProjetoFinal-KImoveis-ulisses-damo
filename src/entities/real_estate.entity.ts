import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedules.entity";

@Entity("realEstate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: "integer", nullable: false })
  size: number;

  @CreateDateColumn({ type: "date", nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: "date", nullable: false })
  updatedAt: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (c) => c.realEstate)
  category: Category;

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedules: Array<Schedule>;
}
