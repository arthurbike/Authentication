import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn({ type: "uuid", length: 100, unique: true })
  id!: string;

  @Column({ type: "varchar", length: 25, nullable: true })
  name?: string;

  @Column({ type: "varchar", length: 160, nullable: false, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 25, nullable: false })
  password!: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  token?: string;
}
