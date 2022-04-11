import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DrugEntity } from 'src/pkg/dal/drug/drug.entity';
import { DrugRepository } from 'src/pkg/dal/drug/drug.repository';
import { SearchDto } from './dto/search.dto';

@Injectable()
export class SearchService {
    constructor(
    @InjectRepository(DrugRepository)
    private drugRepository : DrugRepository
    ) {}
    // เหี้ยไรว้ะ 
    async searchDrug(searchDto: SearchDto) : Promise<DrugEntity> {
        try{
            const query = this.drugRepository.createQueryBuilder('drugEntity')
            if(search) {
                query('(LOWER(')
            }
        } catch(e)
        const AllergicDrugs = await this.allergicDrugUsedRepository.find()
        return AllergicDrugs
    }
}
