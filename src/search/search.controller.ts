import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get('/drug')
  searchDrug(@Query('search') search: string) {
    return this.searchService.searchDrug(search);
  }
}
