import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("photos")
export default class Photo extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}
