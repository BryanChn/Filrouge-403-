import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [InventoryModule, ShoppingListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
