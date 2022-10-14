import { PartialType } from '@nestjs/mapped-types';
import { ShoppingListProduct } from 'src/products/dto/shopping-list-product.dto';
import { CreateShoppingListDto } from './create-shopping-list.dto';

export class UpdateShoppingListDto extends PartialType(CreateShoppingListDto) {
  products: ShoppingListProduct[];
  done: boolean;
  date: Date;
}
