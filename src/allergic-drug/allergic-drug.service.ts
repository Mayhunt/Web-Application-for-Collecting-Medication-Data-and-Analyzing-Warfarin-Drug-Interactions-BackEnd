import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AllergicDrugUsedEntity } from 'src/pkg/dal/allergic-drug-used/allergic-drug-used.entity';
import { AllergicDrugUsedRepository } from 'src/pkg/dal/allergic-drug-used/allergic-drug-used.repository';
import { DrugRepository } from 'src/pkg/dal/drug/drug.repository';
import { CreateAllergicDrugDto } from './dto/create-AllergicDrug.dto';
import { UpdateAllergicDrugDto } from './dto/update-AllergicDrug.dto';

@Injectable()
export class AllergicDrugService {
    constructor(
        @InjectRepository(AllergicDrugUsedRepository)
        private allergicDrugUsedRepository: AllergicDrugUsedRepository,
        
        @InjectRepository(DrugRepository)
        private drugRepository: DrugRepository
    ) {}
            
    async createAllergicDrug(createAllergicDrugDto: CreateAllergicDrugDto
        ): Promise<AllergicDrugUsedEntity> {
            const{
                symptom,
                place,
                more,
            } = createAllergicDrugDto
            
            const drug = await this.drugRepository.findOneOrFail({id: createAllergicDrugDto.drugId})

            const createAllergicDrug = this.allergicDrugUsedRepository.create({
                symptom,
                place,
                more,
                genericName: drug.genericName,
            })

            await this.allergicDrugUsedRepository.save(createAllergicDrug)
            return createAllergicDrug
        }
    
    // เอาแค่ค่า generic name + drug image + symptom
    async getAllergicDrugs() : Promise<AllergicDrugUsedEntity[]> {
        const AllergicDrugs = await this.allergicDrugUsedRepository.find()
        return AllergicDrugs
    }

    async getAllergicDrugById(id: string) : Promise<AllergicDrugUsedEntity> {
        const AllergicDrug = await this.allergicDrugUsedRepository.findOneOrFail()
        return AllergicDrug
    }
    // ไม่ต้องอัพเดท generic name
    async updateAllergicDrug(id: string, updateAllergicDrugDto: UpdateAllergicDrugDto) {
        try {
            const AllergicDrug = await this.getAllergicDrugById(id)

            const{
                symptom,
                place,
                more,
            } = updateAllergicDrugDto

            if(symptom) {
                AllergicDrug.symptom = symptom
            }

            if(place){
                AllergicDrug.place = place
            }

            if(more){
                AllergicDrug.more = more
            }

            await this.allergicDrugUsedRepository.save(AllergicDrug)
            return AllergicDrug

        } catch(e) {
            throw new NotFoundException({
                message : ['Allergic Drug Not Found']
            })
        }
    }

    async deleteAllergicDrug(id: string){
        try{
            const AllergicDrug = await this.getAllergicDrugById(id)
            await this.allergicDrugUsedRepository.delete(id)
            return AllergicDrug
        } catch(e) {
            throw new NotFoundException({
                message: ['Deleting not success']
            })
        }
    }
    
    // static createAllergicDrug(CreateAllergicDrugDto: CreateAllergicDrugDto) {
    //     throw new Error('Method not implemented.');
    // }
}
