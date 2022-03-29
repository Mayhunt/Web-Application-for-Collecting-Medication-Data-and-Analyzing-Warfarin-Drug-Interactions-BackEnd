import { EntityRepository, Repository } from 'typeorm';
import { AccountEntity } from './account.entity';

@EntityRepository(AccountEntity)
export class AccountRepository extends Repository<AccountEntity> {}