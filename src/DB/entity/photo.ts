import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("photos")
export class Photo {
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
