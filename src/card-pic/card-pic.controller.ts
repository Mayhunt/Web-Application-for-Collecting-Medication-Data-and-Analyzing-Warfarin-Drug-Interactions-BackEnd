import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AllergicCardPicEntity } from 'src/pkg/dal/allergic-card-pic/allergic-card-pic.entity';
import { UserEntity } from 'src/pkg/dal/user/user.entity';
import { User } from 'src/pkg/decorator/user.decorator';
import { CardPicService } from './card-pic.service';
import { CreateCardPicDto } from './dto/create-CardPic.dto';

@Controller('card-pic')
export class CardPicController {
  constructor(private cardPicService: CardPicService) {}

  @Post()
  createCardPic(
    @User() user: UserEntity,
    @Body() createCardPicDto: CreateCardPicDto,
  ): Promise<AllergicCardPicEntity> {
    return this.cardPicService.createCardPic(createCardPicDto, user);
  }

  @Get()
  getCardPics(@User() user: UserEntity): Promise<AllergicCardPicEntity[]> {
    return this.cardPicService.getCardPics(user);
  }

  @Get(':id')
  getCardPicById(
    @Param('id') id: string,
    @User() user: UserEntity,
  ): Promise<AllergicCardPicEntity> {
    return this.cardPicService.getCardPicById(id, user);
  }

  @Delete(':id/delete')
  deleteCardPic(
    @Param('id') id: string,
    @User() user: UserEntity,
  ): Promise<AllergicCardPicEntity> {
    return this.cardPicService.deleteCardPic(id, user);
  }
}
