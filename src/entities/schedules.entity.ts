import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { RealEstate } from "./real_estate.entity";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn({ type: "date", nullable: false })
  date: string;

  @CreateDateColumn({ type: "time", nullable: false })
  hour: string;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;

  @ManyToOne(() => RealEstate, (re) => re.schedules)
  realEstate: RealEstate;
}
