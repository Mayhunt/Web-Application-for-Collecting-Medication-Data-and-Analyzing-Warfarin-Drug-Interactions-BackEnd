// import { Controller } from '@nestjs/common';
// import { DrugAlertService } from './drug-alert.service';

// @Controller('drug-alert')
// export class DrugAlertController {
//   constructor(private drugAlertService: DrugAlertService) {}

//   @Post()
//   createDrugAlert(
//     @Body() createAlertDto: CreateAlertDto,
//   ): Promise<DrugAlertEntity> {
//     return this.drugAlertService.createDrugAlert(createAlertDto);
//   }

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
// }
