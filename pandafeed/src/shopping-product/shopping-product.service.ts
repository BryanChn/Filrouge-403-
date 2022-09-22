import { Injectable } from '@nestjs/common';
import { CreateShoppingProductDto } from './dto/create-shopping-product.dto';
import { UpdateShoppingProductDto } from './dto/update-shopping-product.dto';
import { ShoppingProduct } from './entities/shopping-product.entity';

@Injectable()
export class ShoppingProductService {
  create(createShoppingProductDto: CreateShoppingProductDto) {
    return 'This action adds a new shoppingProduct';
  }

  findAll(): Promise<ShoppingProduct[]> {
    return ShoppingProduct.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingProduct`;
  }

  update(id: number, updateShoppingProductDto: UpdateShoppingProductDto) {
    return `This action updates a #${id} shoppingProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingProduct`;
  }
}
