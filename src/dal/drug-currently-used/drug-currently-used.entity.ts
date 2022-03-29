import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'drug_currently_used' })
export class DrugCurrentlyUsedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  drug_id: string;

  @Column()
  generic_name: string;

  @Column()
  caution: string;

  @Column()
  receive_date: Date;

  @Column()
  receive_place: string;

  @Column()
  more: string;

  @Column()
  drug_alert: boolean;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => DrugEntity, (drug) => drug.id)
  @JoinColumn({ name: 'drug_id' })
  drug: drugEntity;

}
