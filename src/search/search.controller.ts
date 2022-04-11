import { Controller, Get, Query } from '@nestjs/common';
import { query } from 'express';
import { DrugEntity } from 'src/pkg/dal/drug/drug.entity';
import { SearchDto } from './dto/search.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor ( private searchService: SearchService){}

    @Get()
    searchDrug(
        @Query() searchDto : SearchDto
    ): Promise<DrugEntity> {
        return this.searchService.searchDrug(searchDto)
    }
}
