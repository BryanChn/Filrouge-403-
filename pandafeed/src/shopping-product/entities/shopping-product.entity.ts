import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities/product.entity';
import { ShoppingList } from './../../shopping-list/entities/shopping-list.entity';
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class ShoppingProduct extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  quantity: number;

  @ManyToOne(() => ShoppingList, (shoppingList) => shoppingList.products, {})
  @JoinColumn()
  shoppingList: ShoppingList;

  @OneToOne(() => Product, (product) => product.shoppingLists)
  @JoinColumn()
  product: Product;
}
