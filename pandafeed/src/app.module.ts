import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ShoppingList } from './shopping-list/entities/shopping-list.entity';

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
      entities: [ShoppingList],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
