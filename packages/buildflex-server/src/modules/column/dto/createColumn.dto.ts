import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export default class CreateColumnDto {
  @IsNotEmpty()
  @IsString()
  tableId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  type: number;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsOptional()
  @IsString()
  description?: string;
}
