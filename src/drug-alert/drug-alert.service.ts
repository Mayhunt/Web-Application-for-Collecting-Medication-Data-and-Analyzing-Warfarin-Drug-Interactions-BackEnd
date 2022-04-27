import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DrugAlertEntity } from 'src/pkg/dal/drug-alert/drug-alert.entity';
import { DrugAlertRepository } from 'src/pkg/dal/drug-alert/drug-alert.repository';
import { CreateAlertDto } from './dto/create-alert.dto';

@Injectable()
export class DrugAlertService {
  constructor(
    @InjectRepository(DrugAlertRepository)
    private drugAlertRepository: DrugAlertRepository,
  ) {}

  async createDrugAlert(
    createAlertDto: CreateAlertDto,
  ): Promise<DrugAlertEntity> {
    const { take, tabs, time, every_hour } = createAlertDto;
    const alert = this.drugAlertRepository.create({
      tabs,
      time,
      every_hour,
      take,
    });
    await this.drugAlertRepository.save(alert);
    return alert;
  }
}
