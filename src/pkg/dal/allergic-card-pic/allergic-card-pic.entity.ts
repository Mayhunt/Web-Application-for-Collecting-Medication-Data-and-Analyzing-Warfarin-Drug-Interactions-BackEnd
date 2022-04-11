import {
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { BaseEntity } from '../base/base.entity';
  import { UserEntity } from '../user/user.entity';
  
  @Entity({ name: 'allergic_card_pic' })
  export class AllergicCardPicEntity extends BaseEntity {
    @Column({ name:'card_pic', type: 'varchar', length: 255 })
    cardPic: string;
  
    @ManyToOne(() => UserEntity, (user) => user.allergicCardPics)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;
  }
  