import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateWaiterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  countPersons: string;
}
