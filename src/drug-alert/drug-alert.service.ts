import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DrugAlertEntity } from 'src/pkg/dal/drug-alert/drug-alert.entity';
import { DrugAlertRepository } from 'src/pkg/dal/drug-alert/drug-alert.repository';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';

@Injectable()
export class DrugAlertService {
  constructor(
    @InjectRepository(DrugAlertRepository)
    private drugAlertRepository: DrugAlertRepository,
  ) {}

  async createDrugAlert(
    createAlertDto: CreateAlertDto,
  ): Promise<DrugAlertEntity> {
    const { take, tabs, time } = createAlertDto;
    const alert = this.drugAlertRepository.create({
      tabs,
      time,
      take,
    });
    await this.drugAlertRepository.save(alert);
    return alert;
  }

  async getDrugAlert(): Promise<DrugAlertEntity[]> {
    const alert = await this.drugAlertRepository.find();
    return alert;
  }

  async getDrugAlertById(id: string): Promise<DrugAlertEntity> {
    const alert = await this.drugAlertRepository.findOneOrFail(id);
    return alert;
  }

  async updateDrugAlert(id: string, updateAlertDto: UpdateAlertDto) {
    try {
      const alert = await this.getDrugAlertById(id);

      const { take, tabs, time, every_hour } = updateAlertDto;

      if (take) {
        alert.take = take;
      }

      if (tabs) {
        alert.tabs = tabs;
      }

      if (time) {
        alert.time = time;
      }

      await this.drugAlertRepository.save(alert);
      return alert;
    } catch (e) {
      throw new NotFoundException({
        message: ['Updating not success'],
      });
    }
  }
  async deleteDrugAlert(id: string) {
    try {
      const DrugAlert = await this.getDrugAlertById(id);
      await this.drugAlertRepository.delete(id);
      return DrugAlert;
    } catch (e) {
      throw new NotFoundException({
        message: ['Deleting not success'],
      });
    }
  }
}
