import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListController } from './shopping-list.controller';
import { ProductsService } from '../products/products.service';

@Module({
  controllers: [ShoppingListController],
  providers: [ShoppingListService, ProductsService],
})
export class ShoppingListModule {}
