import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
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
