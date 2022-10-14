import { Injectable } from '@nestjs/common';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { ShoppingProduct } from './../shopping-product/entities/shopping-product.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  SendAlert() {
    return console.log('Essential product added to shopping list');
  }
  SendNotification() {
    return console.log(
      'Would you like to add this product to your shopping list?',
    );
  }

  async create(createProductDto: CreateProductDto) {
    const products = new Product();
    products.name = createProductDto.name;
    products.quantity = createProductDto.quantity;
    products.minimum = createProductDto.minimum;
    products.essential = createProductDto.essential;

    const newProduct = await products.save();

    if (newProduct.quantity <= newProduct.minimum) {
      return await this.addToLastShoppingList(newProduct);
    }
    return newProduct;
  }

  findAll(): Promise<Product[]> {
    return Product.find();
  }

  findOne(id: number): Promise<Product> {
    return Product.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let product = await Product.findOneBy({ id });

    product.quantity =
      product.quantity - updateProductDto.quantity < 0
        ? 0
        : product.quantity - updateProductDto.quantity;

    product.essential = updateProductDto.essential
      ? updateProductDto.essential
      : product.essential;

    product = await product.save();

    if (product.quantity <= product.minimum) {
      if (product.essential === true) {
        this.SendAlert();
      }
      if (product.essential === false) {
        this.SendNotification();
      }

      return await this.addToLastShoppingList(product);
    }

    return product;
  }

  private async addToLastShoppingList(product: Product) {
    const shoppingList = await this.shoppingListService.ensureShoppingList();

    let shoppingProduct = await ShoppingProduct.findOne({
      where: {
        product: {
          id: product.id,
        },
      },
    });

    if (!shoppingProduct) {
      shoppingProduct = new ShoppingProduct();
    }

    shoppingProduct.quantity = product.minimum - product.quantity + 1;
    shoppingProduct.product = product;

    const newShoppingProduct = await shoppingProduct.save();

    shoppingList.products.push(newShoppingProduct);

    await shoppingList.save();
    return newShoppingProduct;
  }

  async remove(id: number) {
    return await Product.delete(id);
  }
}
