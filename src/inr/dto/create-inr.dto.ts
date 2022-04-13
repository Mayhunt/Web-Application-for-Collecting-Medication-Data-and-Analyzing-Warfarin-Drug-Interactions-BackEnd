import { IsDate, IsNumber } from 'class-validator';

export class CreateInrDto {
  @IsDate()
  followDate: Date;

  @IsNumber()
  inrExpect: number;

  @IsNumber()
  inrMeasure: number;
}
