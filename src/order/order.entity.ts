import { BaseEntity, Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, Unique } from 'typeorm';
import { OrderStatus } from './order.enum';


@Entity()
@Unique(['number'])
export class Order extends BaseEntity {

  @ObjectIdColumn()
  id: ObjectID;

  @CreateDateColumn()
  created: Date;

  @Column()
  number: number;

  @Column()
  table: number;

  @Column()
  content: string;

  @Column()
  price: number;

  @Column()
  status: OrderStatus;

}
