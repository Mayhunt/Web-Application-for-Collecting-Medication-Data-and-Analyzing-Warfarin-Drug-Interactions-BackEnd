
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'inr'})
export class InrEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  follow_date: Date;

  @Column()
  inr_expect: Number;
  
  @Column()
  inr_mesure: Number;

  @Column()
  user_id: Number;

}