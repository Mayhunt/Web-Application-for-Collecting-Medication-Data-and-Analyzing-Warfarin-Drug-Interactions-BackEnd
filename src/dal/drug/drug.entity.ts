
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'drug'})
export class DrugEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  generic_name: string;

  @Column()
  caution: string;

  @Column()
  pic: string;

  @OneToMany(() => AllergicDrugUsedEntity, (drug_id) => drug_id.id)
  @JoinColumn({ name: 'drug_id' })
  drug_id: AllergicDrugUsedEntity;

  @OneToMany(() => DrugCurrentlyUsedEntity, (drug_id) => drug_id.id)
  @JoinColumn({ name: 'drug_id' })
  drug_id: DrugCurrentlyUsedEntity;

}