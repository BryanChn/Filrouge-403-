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

  create(createProductDto: CreateProductDto) {
    const products = new Product();
    products.name = createProductDto.name;
    products.quantity = createProductDto.quantity;
    products.minimum = createProductDto.minimum;
    products.essential = createProductDto.essential;
    console.log(products);
    return products.save().then((product) => {
      if (product.quantity <= product.minimum) {
        return this.addToLastShoppingList(product);
      }
      return product;
    });
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

  update(id: number, updateProductDto: UpdateProductDto) {
    return Product.findOne({ where: { id } })
      .then((product) => {
        product.quantity = updateProductDto.quantity;
        product.minimum = updateProductDto.minimum;
        product.essential = updateProductDto.essential;

        return product.save();
      })
      .then((product) => {
        if (product.quantity <= product.minimum) {
          if (product.essential === true) {
            this.SendAlert();
          }
          if (product.essential === false) {
            this.SendNotification();
          }
          return this.addToLastShoppingList(product);
        }

        return product;
      });
  }
  updateQuantity(id: number, updateProductDto: UpdateProductDto) {
    return Product.findOne({ where: { id } })
      .then((product) => {
        product.quantity = updateProductDto.quantity;
        return product.save();
      })
      .then((product) => {
        if (product.quantity <= product.minimum) {
          if (product.essential === true) {
            this.SendAlert();
          }
          if (product.essential === false) {
            this.SendNotification();
          }
          return this.addToLastShoppingList(product);
        }

        return product;
      });
  }

  private addToLastShoppingList(product: Product) {
    return this.shoppingListService
      .ensureShoppingList()
      .then((shoppingList) => {
        const shoppingProduct = new ShoppingProduct();
        shoppingProduct.quantity = product.minimum - product.quantity + 1;
        shoppingProduct.product = product;
        shoppingList.products.push(shoppingProduct);
        return shoppingList.save();
      })
      .then(() => product);
  }

  async remove(id: number) {
    return await Product.delete(id);
  }
}
