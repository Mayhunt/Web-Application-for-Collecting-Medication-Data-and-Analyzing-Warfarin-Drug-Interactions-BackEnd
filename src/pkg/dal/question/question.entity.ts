import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'question' })
export class QuestionEntity extends BaseEntity {
  @Column({ type: 'numeric' })
  question: number;

  @Column({ type: 'numeric' })
  answer: number;

  @ManyToOne(() => UserEntity, (user) => user.questions)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
