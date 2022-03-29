import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import databaseConfig from './pkg/config/database.config';
import { AllergicDrugUsedEntity } from './pkg/dal/allergic-drug-used/allergic-drug-used.entity';
import { DrugCurrentlyUsedEntity } from './pkg/dal/drug-currently-used/drug-currently-used.entity';
import { DrugInteractionEntity } from './pkg/dal/drug-interaction/drug-interaction.entity';
import { DrugEntity } from './pkg/dal/drug/drug.entity';
import { InrEntity } from './pkg/dal/inr/inr.entity';
import { QuestionEntity } from './pkg/dal/question/question.entity';
import { UserEntity } from './pkg/dal/user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (dbConfig: ConfigType<typeof databaseConfig>) => ({
        type: 'postgres',
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        entities: [
          AllergicDrugUsedEntity,
          DrugEntity,
          DrugCurrentlyUsedEntity,
          DrugInteractionEntity,
          InrEntity,
          QuestionEntity,
          UserEntity,
        ],
        synchronize: true,
        dropSchema: true, ///delete all table in database :clear
        autoLoadEntities: true,
        logging: true,
        ssl: {
          ca: dbConfig.caCert,
        },
      }),
      inject: [databaseConfig.KEY],
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
