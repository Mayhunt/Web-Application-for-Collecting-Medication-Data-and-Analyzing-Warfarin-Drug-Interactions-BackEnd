import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'inr' })
export class InrEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  follow_date: Date;

  @Column()
  inr_expect: number;

  @Column()
  inr_measure: number;

  @Column()
  user_id: number;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
