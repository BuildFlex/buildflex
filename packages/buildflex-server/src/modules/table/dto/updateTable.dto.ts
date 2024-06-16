import { IsNotEmpty, IsString } from 'class-validator';

export default class UpdateTableDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
