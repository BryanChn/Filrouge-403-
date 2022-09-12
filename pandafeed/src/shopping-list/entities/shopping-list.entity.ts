import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
@Entity()
export class ShoppingList extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  products: string;

  @Column()
  quantity: number;

  @Column()
  done: boolean;

  @Column()
  date: Date;

  @Column()
  finishDate: Date;
  endedDate: Date;
}
