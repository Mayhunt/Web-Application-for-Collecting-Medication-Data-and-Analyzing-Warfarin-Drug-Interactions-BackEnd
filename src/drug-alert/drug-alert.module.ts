import { Module } from '@nestjs/common';
import { DrugAlertController } from './drug-alert.controller';
import { DrugAlertService } from './drug-alert.service';

@Module({
  providers: [DrugAlertService],
  controllers: [DrugAlertController],
})
export class DrugAlertModule {}
