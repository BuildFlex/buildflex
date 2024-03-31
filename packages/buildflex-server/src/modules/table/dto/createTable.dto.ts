import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CreateTableDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  order: number;
}
