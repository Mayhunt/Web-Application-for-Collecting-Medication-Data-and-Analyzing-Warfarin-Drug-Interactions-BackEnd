import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DrugCurrentlyUsedEntity } from 'src/pkg/dal/drug-currently-used/drug-currently-used.entity';
import { CurrentlyDrugService } from './currently-drug.service';
import { CreateCurrentlyDrugDto } from './dto/create-CurrentlyDrug.dto';
import { UpdateCurrentlyDrugDto } from './dto/update-CurrentlyDrug.dto';

@Controller('currently-drug')
export class CurrentlyDrugController {
  constructor(private currentlyDrugService: CurrentlyDrugService) {}

  @Post()
  createCurrentlyDrug(
    @Body() createCurrentlyDrugDto: CreateCurrentlyDrugDto,
  ): Promise<DrugCurrentlyUsedEntity> {
    return this.currentlyDrugService.createCurrentlyDrug(
      createCurrentlyDrugDto,
    );
  }

  @Get()
  getCurrentlyDrugs(): Promise<DrugCurrentlyUsedEntity[]> {
    return this.currentlyDrugService.getCurrentlyDrugs();
  }

  @Get(':id')
  getCurrentlyDrugById(
    @Param('id') id: string,
  ): Promise<DrugCurrentlyUsedEntity> {
    return this.currentlyDrugService.getCurrentlyDrugById(id);
  }

  @Patch(':id/update')
  updateCurrentlyDrug(
    @Param('id') id: string,
    @Body() updateCurrentlyDrugDto: UpdateCurrentlyDrugDto,
  ): Promise<DrugCurrentlyUsedEntity> {
    return this.currentlyDrugService.updateCurrentlyDrug(
      id,
      updateCurrentlyDrugDto,
    );
  }

  @Delete(':id/delete')
  deleteCurrentlyDrug(
    @Param('id') id: string,
  ): Promise<DrugCurrentlyUsedEntity> {
    return this.currentlyDrugService.deleteCurrentlyDrug(id);
  }
}
