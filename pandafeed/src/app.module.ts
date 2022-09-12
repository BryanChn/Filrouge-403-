import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './inventory/entities/inventory.entity';
import { ShoppingList } from './shopping-list/entities/shopping-list.entity';

@Module({
  imports: [
    InventoryModule,
    ShoppingListModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'pandafeed',
      entities: [Inventory, ShoppingList],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
