import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllergicDrugUsedRepository } from './dal/allergic-drug-used/allergic-drug-used.repository';
import { DrugCurrentlyUsedRepository } from './dal/drug-currently-used/drug-currently-used.repository';
import { DrugInteractionRepository } from './dal/drug-interaction/drug-interaction.repository';
import { DrugRepository } from './dal/drug/drug.repository';
import { InrRepository } from './dal/inr/inr.repository';
import { QuestionRepository } from './dal/question/question.repository';
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
      dropSchema: true, ///delete all table in database :clear
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([
      UserRepository,
      DrugRepository,
      InrRepository,
      QuestionRepository,
      DrugInteractionRepository,
      DrugCurrentlyUsedRepository,
      AllergicDrugUsedRepository,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
