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

  // async getDrugAlert(user: UserEntity): Promise<DrugAlertEntity[]> {
  //   const alert = await this.drugAlertRepository.find({ where: { user } });
  //   return alert;
  // }

  // async getDrugAlertById(id: string, user: UserEntity): Promise<DrugAlertEntity> {
  //   const alert = await this.drugAlertRepository.findOneOrFail({ where: { user, id } });
  //   return alert;
  // }

  // async updateDrugAlert(updateAlertDto: UpdateAlertDto, user: UserEntity) {
  //   try {
  //     const alert = await this.getDrugAlert(user);

  //     const { take, tabs, time, every_hour } = updateAlertDto;

  //     if (take) {
  //       alert.take = take;
  //     }

  //     if (tabs) {
  //       alert.tabs = tabs;
  //     }

  //     if (every_hour) {
  //       alert.every_hour = every_hour;
  //     }

  //     if (time) {
  //       alert.time = time;
  //     }

  //     await this.drugAlertRepository.save(alert);
  //     return alert;
  //   } catch (e) {
  //     throw new NotFoundException({
  //       message: ['Updating not success'],
  //     });
  //   }
  // }
  // async deleteDrugAlert(user: UserEntity) {
  //   try {
  //     const DrugAlert = await this.getDrugAlert(user);
  //     await this.drugAlertRepository.delete();
  //     return DrugAlert;
  //   } catch (e) {
  //     throw new NotFoundException({
  //       message: ['Deleting not success'],
  //     });
  //   }
  // }
}
