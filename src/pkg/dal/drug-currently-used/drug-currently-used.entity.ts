import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { DrugEntity } from '../drug/drug.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'drug_currently_used' })
export class DrugCurrentlyUsedEntity extends BaseEntity {
  @Column({ name: 'generic_name', type: 'varchar', length: 255 })
  genericName: string;

  @Column({ type: 'varchar', length: 255 })
  caution: string;

  @Column({ name: 'receive_date', type: 'timestamptz' })
  receiveDate: Date;

  @Column({ name: 'receive_place', type: 'varchar', length: 255 })
  receivePlace: string;

  @Column({ type: 'varchar', length: 255 })
  more: string;

  @Column({ name: 'drug_alert', type: 'boolean' })
  drugAlert: boolean;

  @ManyToOne(() => UserEntity, (user) => user.drugCurrentlyUseds)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => DrugEntity, (drug) => drug.drugCurrentlyUseds)
  @JoinColumn({ name: 'drug_id' })
  drug: DrugEntity;
}
