import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { AllergicDrugModule } from './allergic-drug/allergic-drug.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { SearchModule } from './search/search.module';
import { CurrentlyDrugModule } from './currently-drug/currently-drug.module';
import { InrModule } from './inr/inr.module';
import { DatabaseConfig } from './pkg/config/database.config';
import { GenericConfig } from './pkg/config/generic.config';
import { JwtConfig } from './pkg/config/jwt.config';
import { AllergicCardPicEntity } from './pkg/dal/allergic-card-pic/allergic-card-pic.entity';
import { AllergicDrugUsedEntity } from './pkg/dal/allergic-drug-used/allergic-drug-used.entity';
import { DrugAlertEntity } from './pkg/dal/drug-alert/drug-alert.entity';
import { DrugCurrentlyUsedEntity } from './pkg/dal/drug-currently-used/drug-currently-used.entity';
import { DrugInteractionEntity } from './pkg/dal/drug-interaction/drug-interaction.entity';
import { DrugEntity } from './pkg/dal/drug/drug.entity';
import { HintEntity } from './pkg/dal/hint/hint.entity';
import { InrEntity } from './pkg/dal/inr/inr.entity';
import { QuestionEntity } from './pkg/dal/question/question.entity';
import { UserEntity } from './pkg/dal/user/user.entity';
// import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DatabaseConfig, GenericConfig, JwtConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (dbConfig: ConfigType<typeof DatabaseConfig>) => ({
        type: 'postgres',
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        entities: [
          AllergicDrugUsedEntity,
          AllergicCardPicEntity,
          DrugEntity,
          DrugCurrentlyUsedEntity,
          DrugInteractionEntity,
          InrEntity,
          QuestionEntity,
          UserEntity,
          DrugAlertEntity,
          HintEntity,
        ],
        synchronize: dbConfig.isSync,
        dropSchema: dbConfig.isDrop, ///delete all table in database :clear
        autoLoadEntities: true,
        logging: dbConfig.isLog,
        ssl: {
          ca: dbConfig.caCert,
        },
      }),
      inject: [DatabaseConfig.KEY],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-http-print',
          options: {
            destination: 1,
            all: true,
            colorize: true,
            translateTime: true,
            prettyOptions: {
              ignore: 'hostname,pid,context,req,res',
              messageFormat: '({context})  \x1B[37m{msg}',
            },
          },
        },
      },
    }),
    AuthModule,
    AllergicDrugModule,
    // SearchModule,
    CurrentlyDrugModule,
    InrModule,
    // UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
