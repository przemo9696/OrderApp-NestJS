import { IsNotEmpty, IsNumberString } from 'class-validator';



export class CreateOrderDto {

  @IsNumberString()
  @IsNotEmpty()
  number: number;

  @IsNumberString()
  @IsNotEmpty()
  table: number;

  @IsNotEmpty()
  content: string;

  @IsNumberString()
  @IsNotEmpty()
  price: number;
}
