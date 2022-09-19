import { ApiProperty } from '@nestjs/swagger';
import { ShoppingProduct } from 'src/shopping-product/entities/shopping-product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: true })
  name: string;

  @ApiProperty()
  @Column()
  essential: boolean;

  @ApiProperty()
  @Column()
  quantity: number;

  @ApiProperty()
  @Column()
  minimum: number;

  @OneToMany(
    () => ShoppingProduct,
    (shoppingProduct) => shoppingProduct.product,
  )
  shoppingLists: ShoppingProduct[];
}
