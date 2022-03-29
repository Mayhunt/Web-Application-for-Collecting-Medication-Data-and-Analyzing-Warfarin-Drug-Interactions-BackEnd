import { userInfo } from 'os';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ length: 13 })
  id_card_number: string;

  @Column()
  birthdate: Date;

  @Column()
  blood_group: string;

  @Column()
  medication_condition: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  bmi: number;

  @Column({ length: 10 })
  phone_num: string;

  @Column()
  emergency_contact: string;

  @Column({ length: 10 })
  emergency_phone_num: string;

  @Column()
  pic: string;

  @OneToMany(() => QuestionEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: QuestionEntity;

  @OneToMany(() => InrEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: InrEntity;

  @OneToMany(() => AllergicDrugUsedEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: AllergicDrugUsedEntity;

  @OneToMany(() => DrugCurrentlyUsedEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: DrugCurrentlyUsedEntity;

  @ManyToOne(() => AccountEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
