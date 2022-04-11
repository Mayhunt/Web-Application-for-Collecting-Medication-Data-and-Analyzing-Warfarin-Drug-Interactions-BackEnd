import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DrugCurrentlyUsedEntity } from 'src/pkg/dal/drug-currently-used/drug-currently-used.entity';
import { DrugCurrentlyUsedRepository } from 'src/pkg/dal/drug-currently-used/drug-currently-used.repository';
import { DrugRepository } from 'src/pkg/dal/drug/drug.repository';
import { CreateCurrentlyDrugDto } from './dto/create-CurrentlyDrug.dto';

@Injectable()
export class CurrentlyDrugService {
    constructor(
        @InjectRepository(DrugCurrentlyUsedRepository)
        private currentlyDrugRepository :DrugCurrentlyUsedRepository,

        @InjectRepository(DrugRepository)
        private drugRepository: DrugRepository
    ){}
        // อีส่วนที่เป็น บูลีนนี่จะเอาไงกะกู
        async createCurrentlyDrug (createCurrentlyDrugDto: CreateCurrentlyDrugDto
            ): Promise<DrugCurrentlyUsedEntity> {
            const {
                receiveDate,
                receivePlace,
                more,
                drugAlert,
                tabs,
                // take,
                // time,
                everyHour
            } = createCurrentlyDrugDto

            const drug = await this.drugRepository.findOneOrFail({id: createCurrentlyDrugDto.drugId})

            const createCurrentlyDrug = this.currentlyDrugRepository.create({
                receiveDate,
                receivePlace,
                more,
                drugAlert,
                // tabs,
                // take,
                // time,
                // everyHour
                genericName: drug.genericName,
            })
            
            await this.currentlyDrugRepository.save(createCurrentlyDrug)
            return createCurrentlyDrug
        }
    
        // เอาค่า generic name + drug image + more
        // ต้องมีส่วนที่ดึง drugIdมาด้วยใช่มั้ย
    async getCurrentlyDrugs() : Promise<DrugCurrentlyUsedEntity[]>{
        const CurrentlyDrugs = await this.currentlyDrugRepository.find()
        return CurrentlyDrugs
    }

    async getCurrentlyDrugById(id:string) :Promise<DrugCurrentlyUsedEntity>{
        const CurrentlyDrug = await this.currentlyDrugRepository.findOneOrFail()
        return CurrentlyDrug
    }
    
    async deleteCurrentlyDrug(id:string){
        try {
            const CurrentlyDrug = await this.getCurrentlyDrugById(id)
            await this.currentlyDrugRepository.delete(id)
            return CurrentlyDrug
        } catch(e){
            throw new NotFoundException({
                message: ['Deleting not success']
            })
        }
    }

}
