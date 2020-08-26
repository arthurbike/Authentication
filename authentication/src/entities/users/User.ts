import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "user" })
export class User {
  @PrimaryColumn({ type: "uuid", nullable: false, unique: true })
  id!: string;

  @Column({ type: "varchar", length: 25, nullable: true })
  name?: string;

  @Column({ type: "varchar", length: 160, nullable: false, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  password!: string;

  @Column({ type: "varchar", length: 300, nullable: true })
  token?: string;
}
