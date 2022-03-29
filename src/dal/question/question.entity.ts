import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'question' })
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: number;

  @Column()
  answer: number;

  @Column()
  user_id: number;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
