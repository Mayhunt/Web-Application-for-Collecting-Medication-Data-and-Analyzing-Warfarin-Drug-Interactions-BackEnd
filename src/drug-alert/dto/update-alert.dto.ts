import { IsOptional } from 'class-validator';

export class UpdateAlertDto {
  @IsOptional()
  tabs?: number;

  @IsOptional()
  take?: Enumerator;

  @IsOptional()
  time?: Enumerator;

  @IsOptional()
  every_hour?: number;
}
