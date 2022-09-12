import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  products: string;

  @Column()
  quantity: number;

  @Column()
  done: true;

  @Column()
  date: Date;
}
