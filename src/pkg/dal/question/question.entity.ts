import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'question' })
export class QuestionEntity extends BaseEntity {
  @Column({ type: 'string' })
  question: string;

  @Column({ type: 'string' })
  answer: string;

  @ManyToOne(() => UserEntity, (user) => user.questions)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
