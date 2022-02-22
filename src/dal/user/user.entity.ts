
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'user'})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}