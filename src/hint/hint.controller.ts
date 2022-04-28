// import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
// import { HintEntity } from 'src/pkg/dal/hint/hint.entity';
// import { UserEntity } from 'src/pkg/dal/user/user.entity';
// import { User } from 'src/pkg/decorator/user.decorator';
// import { CreateHintDto } from './dto/create-hint.dto';
// import { HintService } from './hint.service';

// @Controller('hint')
// export class HintController {
//   constructor(private hintService: HintService) {}
//   @Post()
//   createHint(
//     @User() user: UserEntity,
//     @Body() createHintDto: CreateHintDto,
//   ): Promise<HintEntity> {
//     console.log(user);
//     return this.hintService.createHint(createHintDto, user);
//   }

//   @Get()
//   getHints(@User() user: UserEntity): Promise<HintEntity[]> {
//     // console.log(user);
//     return this.hintService.getHints(user);
//   }

//   @Get(':id')
//   getInrById(
//     @Param('id') id: string,
//     @User() user: UserEntity,
//   ): Promise<HintEntity> {
//     return this.hintService.getInrById(id, user);
//   }

//   @Patch(':id/update')
//   updateInr(
//     @Param('id') id: string,
//     @Body() updateInrDto: UpdateInrDto,
//     @User() user: UserEntity,
//   ): Promise<HintEntity> {
//     return this.hintService.updateHint(id, updateHintDto, user);
//   }

//   @Delete(':id/delete')
//   deleteHint(
//     @Param('id') id: string,
//     @User() user: UserEntity,
//   ): Promise<HintEntity> {
//     return this.hintService.deleteHint(id, user);
//   }
// }
