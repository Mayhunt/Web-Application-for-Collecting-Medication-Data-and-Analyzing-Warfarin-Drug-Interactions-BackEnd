import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrugAlertRepository } from 'src/pkg/dal/drug-alert/drug-alert.repository';
import { DrugAlertController } from './drug-alert.controller';
import { DrugAlertService } from './drug-alert.service';

@Module({
  imports: [TypeOrmModule.forFeature([DrugAlertRepository])],
  providers: [DrugAlertService],
  controllers: [DrugAlertController],
})
export class DrugAlertModule {}
