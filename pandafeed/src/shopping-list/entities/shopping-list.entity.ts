import { ApiProperty } from '@nestjs/swagger';
import { ShoppingProduct } from '../../shopping-product/entities/shopping-product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
@Entity()
export class ShoppingList extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  done: boolean;

  @ApiProperty()
  @Column()
  date: Date;

  @ApiProperty()
  @Column({ nullable: true })
  endedDate?: Date;

  @OneToMany(
    () => ShoppingProduct,
    (shoppingProduct) => shoppingProduct.shoppingList,
    { eager: true, cascade: ['insert', 'update'] },
  )
  products: ShoppingProduct[];
}
