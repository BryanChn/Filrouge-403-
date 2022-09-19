import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import { CreateShoppingProductDto } from './dto/create-shopping-product.dto';
import { UpdateShoppingProductDto } from './dto/update-shopping-product.dto';

@Injectable()
export class ShoppingProductService {
  async create() {
    const minProduct = await Product.createQueryBuilder('minimum')
      .where('product.min >= product.quantity')
      .execute();

    minProduct.save();
    return;
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
