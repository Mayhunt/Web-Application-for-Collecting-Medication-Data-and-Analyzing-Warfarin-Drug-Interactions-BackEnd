import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { InrEntity } from 'src/pkg/dal/inr/inr.entity';
import { UserEntity } from 'src/pkg/dal/user/user.entity';
import { User } from 'src/pkg/decorator/user.decorator';
import { LocalAuthGuard } from 'src/pkg/guard/local-auth.guard';
import { CreateInrDto } from './dto/create-inr.dto';
import { UpdateInrDto } from './dto/update-inr.dto';
import { InrService } from './inr.service';

@Controller('inr')
export class InrController {
  constructor(private inrService: InrService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  createInr(
    @User() user: UserEntity,
    @Body() createInrDto: CreateInrDto,
  ): Promise<InrEntity> {
    console.log(user);
    return this.inrService.createInr(createInrDto);
  }

  @Get()
  getInrs(): Promise<InrEntity[]> {
    return this.inrService.getInrs();
  }

  @Get(':id')
  getInrById(@Param('id') id: string): Promise<InrEntity> {
    return this.inrService.getInrById(id);
  }

  @Patch(':id/update')
  updateInr(
    @Param('id') id: string,
    @Body() updateInrDto: UpdateInrDto,
  ): Promise<InrEntity> {
    return this.inrService.updateInr(id, updateInrDto);
  }

  @Delete(':id/delete')
  deleteInr(@Param('id') id: string): Promise<InrEntity> {
    return this.inrService.deleteInr(id);
  }
}
