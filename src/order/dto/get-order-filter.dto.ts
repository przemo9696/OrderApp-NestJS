import { OrderStatus } from '../order.enum';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class GetOrderFilterDto {
  @IsOptional()
  @IsIn([OrderStatus.OPEN, OrderStatus.IN_PROGRESS, OrderStatus.COMPLETED])
  status: OrderStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
