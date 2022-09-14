import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/entities/product.entity';
import { ShoppingList } from 'src/shopping-list/entities/shopping-list.entity';
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ShoppingProduct extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  quantity: number;

  @OneToOne(() => ShoppingList)
  @JoinColumn()
  shoppingList: ShoppingList;
  @OneToOne(() => Product)
  @JoinColumn()
  products: Product;
}
