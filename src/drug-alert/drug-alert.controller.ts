import { Body, Controller, Post } from '@nestjs/common';
import { DrugAlertEntity } from 'src/pkg/dal/drug-alert/drug-alert.entity';
import { DrugAlertService } from './drug-alert.service';
import { CreateAlertDto } from './dto/create-alert.dto';

@Controller('drug-alert')
export class DrugAlertController {
  constructor(private drugAlertService: DrugAlertService) {}

  @Post()
  createDrugAlert(
    @Body() createAlertDto: CreateAlertDto,
  ): Promise<DrugAlertEntity> {
    return this.drugAlertService.createDrugAlert(createAlertDto);
  }

  //   @Get(':id')
  //   getDrugAlertById(@Param('id') id: string): Promise<DrugAlertEntity> {
  //     return this.drugAlertService.getDrugAlertById(id);
  //   }

  //   @Patch(':id/update')
  //   updateDrugAlert(
  //     @Param('id') id: string,
  //     @Body() updateAlertDto: UpdateAlertDto,
  //   ): Promise<DrugAlertEntity> {
  //     return this.drugAlertService.updateDrugAlert(id, updateAlertDto);
  //   }

  //   @Delete(':id/delete')
  //   deleteDrugAlert(@Param('id') id: string): Promise<DrugAlertEntity> {
  //     return this.drugAlertService.deleteDrugAlert(id);
  //   }
}
