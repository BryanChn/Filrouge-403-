import { Global, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingList } from 'src/shopping-list/entities/shopping-list.entity';
import { Product } from './entities/product.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product, ShoppingList])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
