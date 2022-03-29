import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'accpunt' })
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;


  @OneToMany(() => UserdEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: UserEntity;
}
