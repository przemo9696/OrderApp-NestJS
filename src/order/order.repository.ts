import { Order } from './order.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderStatus } from './order.enum';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';


@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const { number, table, content, price } = createOrderDto;

    const order = new Order();
    order.number = number;
    order.table = table;
    order.content = content;
    order.price = price;
    order.status = OrderStatus.OPEN;

    try {
      await order.save();
    } catch (error) {
      if (error.code === 11000) {   // duplicate username
        throw new ConflictException('Order with this number already exist.');
      } else {
        throw new InternalServerErrorException();
      }
    }

    return order;
  }
}
