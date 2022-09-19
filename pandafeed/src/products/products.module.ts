import { Global, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Global()
@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
