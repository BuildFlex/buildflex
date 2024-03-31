import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class UpdateTableDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  order: number;
}
