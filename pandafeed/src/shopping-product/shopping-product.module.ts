import { Module } from '@nestjs/common';
import { ShoppingProductService } from './shopping-product.service';
import { ShoppingProductController } from './shopping-product.controller';

@Module({
  controllers: [ShoppingProductController],
  providers: [ShoppingProductService]
})
export class ShoppingProductModule {}
