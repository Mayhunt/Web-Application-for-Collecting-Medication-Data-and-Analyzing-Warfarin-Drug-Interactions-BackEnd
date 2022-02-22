import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrugRepository } from './dal/drug/drug.repository';
import { InrRepository } from './dal/inr/inr.repository';
import { UserRepository } from './dal/user/user.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '206.189.38.174',
      port: 5432,
      username: 'isaree',
      password: 'jZzuj6hvz2oDkSec',
      database: 'isaree',
      entities: [],
      synchronize: true,
      dropSchema : true, ///delete all table in database :clear 
      autoLoadEntities: true
    }),
  TypeOrmModule.forFeature([UserRepository,DrugRepository,InrRepository])

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
