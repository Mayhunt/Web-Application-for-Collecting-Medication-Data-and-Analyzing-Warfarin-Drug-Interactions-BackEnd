import { IsOptional } from 'class-validator';

export class UpdateInrDto {
  @IsOptional()
  followDate?: Date;

  @IsOptional()
  inrExpect?: number;

  @IsOptional()
  inrMeasure?: number;
}
