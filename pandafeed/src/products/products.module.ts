import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ShoppingListService],
})
export class ProductsModule {}
