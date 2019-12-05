import { BaseEntity, Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Order extends BaseEntity {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  number: number;

  @Column()
  table: number;

  @Column()
  content: string;

  @CreateDateColumn()
  created: Date;

}
