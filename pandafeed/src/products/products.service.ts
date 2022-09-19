import { Injectable } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto) {
    const products = new Product();
    products.name = createProductDto.name;
    products.quantity = createProductDto.quantity;
    products.minimum = createProductDto.minimum;
    products.essential = createProductDto.essential;
    console.log(products);
    return await products.save();
  }

  findAll(): Promise<Product[]> {
    return Product.find();
  }

  findOne(id: number): Promise<Product> {
    return Product.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const Products = await Product.findOne({
      where: {
        id: id,
      },
    });

    Products.quantity = updateProductDto.quantity;
    Products.minimum = updateProductDto.minimum;
    Products.essential = updateProductDto.essential;
    return await Products.save();
  }

  async remove(id: number) {
    return await Product.delete(id);
  }
}
