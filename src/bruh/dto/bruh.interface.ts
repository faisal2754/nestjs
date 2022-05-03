import { IsNotEmpty } from 'class-validator';

export class BruhDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;
}
