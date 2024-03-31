import { IsNumber, IsOptional, IsString } from 'class-validator';

export default class UpdateColumnDto {
  @IsOptional()
  @IsNumber()
  type: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  order: number;

  @IsOptional()
  @IsNumber()
  width: number;

  @IsOptional()
  @IsString()
  description?: string;
}
