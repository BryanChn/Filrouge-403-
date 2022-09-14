import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ShoppingList } from './shopping-list/entities/shopping-list.entity';
import { ProductsModule } from './products/products.module';
import { ShoppingProductModule } from './shopping-product/shopping-product.module';
import { Product } from './products/entities/product.entity';
import { ShoppingProduct } from './shopping-product/entities/shopping-product.entity';

@Module({
  imports: [
    ShoppingListModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'pandafeed',
      entities: [ShoppingList, Product, ShoppingProduct],
      synchronize: true,
    }),
    ProductsModule,
    ShoppingProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
