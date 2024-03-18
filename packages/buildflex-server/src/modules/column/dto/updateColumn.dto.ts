import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export default class UpdateColumnDto {
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
