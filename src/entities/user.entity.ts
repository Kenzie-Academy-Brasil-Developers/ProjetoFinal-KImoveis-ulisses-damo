import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Schedule } from "./schedules.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, nullable: false })
  name: string;

  @Column({ length: 45, unique: true, nullable: false })
  email: string;

  @Column({ length: 120, nullable: false })
  password: string;

  @Column({ default: false })
  admin: boolean;

  @CreateDateColumn({ type: "date", nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: "date", nullable: false })
  updatedAt: Date;

  @DeleteDateColumn({ type: "date" })
  deletedAt: string | null;

  @OneToMany(() => Schedule, (s) => s.user)
  schedules: Array<Schedule>;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);
    if (!hasRounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}
