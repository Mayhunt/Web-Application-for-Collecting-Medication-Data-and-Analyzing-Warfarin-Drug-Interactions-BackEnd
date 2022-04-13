import { IsOptional } from 'class-validator';

export class UpdateMeDto {
  @IsOptional()
  firstName?: string;

  @IsOptional()
  lastName?: string;

  @IsOptional()
  idCardNumber?: string;

  @IsOptional()
  birthDate?: Date;

  @IsOptional()
  bloodGroup?: string;

  @IsOptional()
  medicationCondition?: string;

  @IsOptional()
  weight?: number;

  @IsOptional()
  height?: number;

  @IsOptional()
  bmi?: number;

  @IsOptional()
  phoneNum?: string;

  @IsOptional()
  emergencyContact?: string;

  @IsOptional()
  emergencyPhoneNum?: string;

  @IsOptional()
  pic?: string;
}
