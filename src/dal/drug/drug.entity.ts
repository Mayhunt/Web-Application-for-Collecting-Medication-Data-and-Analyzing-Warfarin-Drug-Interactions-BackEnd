
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'drug'})
export class DrugEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  generic_name: string;

  @Column()
  caution: string;

  @Column()
  pic: string;

}