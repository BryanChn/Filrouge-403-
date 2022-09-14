import { Injectable } from '@nestjs/common';
import { CreateShoppingProductDto } from './dto/create-shopping-product.dto';
import { UpdateShoppingProductDto } from './dto/update-shopping-product.dto';

@Injectable()
export class ShoppingProductService {
  create(createShoppingProductDto: CreateShoppingProductDto) {
    return 'This action adds a new shoppingProduct';
  }

  findAll() {
    return `This action returns all shoppingProduct`;
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
