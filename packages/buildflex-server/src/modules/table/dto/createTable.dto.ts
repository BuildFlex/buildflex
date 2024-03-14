import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateTableDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
