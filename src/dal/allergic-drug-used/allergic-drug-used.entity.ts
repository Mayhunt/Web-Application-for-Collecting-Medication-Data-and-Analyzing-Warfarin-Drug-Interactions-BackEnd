import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'allergic_drug_used' })
export class AllergicDrugUsedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  drug_id: string;

  @Column()
  generic_name: string;

  @Column()
  sympton: string;

  @Column()
  more: string;

  @Column()
  card_pic: string;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => DrugEntity, (drug) => drug.id)
  @JoinColumn({ name: 'drug_id' })
  drug: drugEntity;
}
