import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AllergicDrugUsedEntity } from 'src/pkg/dal/allergic-drug-used/allergic-drug-used.entity';
import { AllergicDrugService } from './allergic-drug.service';
import { CreateAllergicDrugDto } from './dto/create-AllergicDrug.dto';
import { UpdateAllergicDrugDto } from './dto/update-AllergicDrug.dto';

@Controller('allergic-drug')
export class AllergicDrugController {
  constructor(private allergicDrugService: AllergicDrugService) {}

  @Post()
  createAllergicDrug(
    @Body() createAllergicDrugDto: CreateAllergicDrugDto,
  ): Promise<AllergicDrugUsedEntity> {
    return this.allergicDrugService.createAllergicDrug(createAllergicDrugDto);
  }

  @Get()
  getAllergicDrugs(): Promise<AllergicDrugUsedEntity[]> {
    return this.allergicDrugService.getAllergicDrugs();
  }

  @Get(':id')
  getAllergicDrugById(
    @Param('id') id: string,
  ): Promise<AllergicDrugUsedEntity> {
    return this.allergicDrugService.getAllergicDrugById(id);
  }

  @Patch(':id/update')
  updateAllergicDrug(
    @Param('id') id: string,
    @Body() updateAllergicDrugDto: UpdateAllergicDrugDto,
  ): Promise<AllergicDrugUsedEntity> {
    return this.allergicDrugService.updateAllergicDrug(
      id,
      updateAllergicDrugDto,
    );
  }

  @Delete(':id/delete')
  deleteAllergicDrug(@Param('id') id: string): Promise<AllergicDrugUsedEntity> {
    return this.allergicDrugService.deleteAllergicDrug(id);
  }
}
