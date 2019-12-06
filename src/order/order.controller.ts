import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderStatus } from './order.enum';
import { OrderStatusValidadationPipe } from './pipes/order-status-validadation.pipe';


@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('/:id')
  getOrderById(@Param('id') id: string): Promise<Order> {
    return this.orderService.getOrderById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.createOrder(createOrderDto);
  }

  @Delete('/:id')
  deleteOrder(@Param('id') id: string): Promise<void> {
    return this.orderService.deleteOrder(id);
  }

  @Patch('/:id/status')
  updateOrderStatus(
    @Param('id') id: string, @Body('status', OrderStatusValidadationPipe) status: OrderStatus): Promise<Order> {
      return this.orderService.updateOrderStatus(id, status);
  }


}
