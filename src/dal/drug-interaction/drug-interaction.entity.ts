import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'drug_interaction' })
export class DrugInteractionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  generic_name: string;

  @Column()
  caution: string;

  @Column()
  criteria: string;

  @Column()
  effect_inr: string;
}
