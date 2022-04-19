import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsString } from 'class-validator';

export class CreateCurrentlyDrugDto {
  @IsString()
  drugId: string;

  @IsDate()
  @Type(() => Date)
  receiveDate: Date;

  @IsString()
  caution: string;

  @IsString()
  receivePlace: string;

  @IsString()
  more: string;

  @IsBoolean()
  alertStatus: boolean;

  //

  // ถ้าไม่เตือนค่าข้างล่างไม่มี ต้องทำไง

  // @IsNumber()
  // tabs: number;

  // หอยหลอด enum กำหนดค่ายังไง registerEnum เหี้ยไรนิ
  // @IsEnum()
  // take: Enumerator;

  // @IsEnum()
  // time: Enumerator;

  // @IsNumber()
  // everyHour: number;
}
