import { IsEnum, IsNumber } from 'class-validator';
import { Takes, Time } from 'src/pkg/dal/drug-alert/drug-alert.entity';

export class CreateAlertDto {
  @IsNumber()
  tabs: number;

  @IsEnum(Takes)
  take: Enumerator;

  @IsEnum(Time)
  time: Enumerator;

  @IsNumber()
  every_hour: number;
}
