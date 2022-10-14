import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import { ShoppingProduct } from 'src/shopping-product/entities/shopping-product.entity';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingList } from './entities/shopping-list.entity';

@Injectable()
export class ShoppingListService {
  async create(createShoppingListDto: CreateShoppingListDto) {
    const shoppingList = new ShoppingList();
    shoppingList.date = new Date();
    shoppingList.done = false;
    return await shoppingList.save();
  }
  // ensureShoppingList() is a method that returns a Promise<ShoppingList> get or create a shopping list
  ensureShoppingList() {
    return ShoppingList.findOne({
      where: {
        done: false,
      },
      relations: {
        products: {
          product: true,
        },
      },
    }).then((shoppingList) => {
      if (!shoppingList) {
        const shoppingList = new ShoppingList();
        shoppingList.date = new Date();
        shoppingList.done = false;
        shoppingList.products = [];
        return shoppingList.save();
      }
      return shoppingList;
    });
  }

  async findAll(): Promise<ShoppingList[]> {
    return await ShoppingList.find({
      select: {
        products: {
          product: {
            id: true,
            name: true,
          },
        },
      },
      relations: {
        products: {
          product: true,
        },
      },
      order: {
        products: {
          product: {
            id: 'ASC',
          },
        },
      },
    });
  }

  findOne(id: number): Promise<ShoppingList> {
    return ShoppingList.findOne({
      where: {
        id,
      },
      relations: ['products.product'],
      // relation used for see the products in the shopping list
    });
  }

  async update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    try {
      const shoppingList = await ShoppingList.findOne({
        where: {
          id,
        },
        relations: {
          products: {
            product: true,
          },
        },
      });

      shoppingList.done = updateShoppingListDto.done;

      if (updateShoppingListDto.done) {
        shoppingList.endedDate = new Date();
        shoppingList.products.forEach(async (ProductAdded: ShoppingProduct) => {
          console.log('je suis la hello', ProductAdded);

          ProductAdded.product.quantity += ProductAdded.quantity;
          await ProductAdded.product.save();
        });
      }

      return await shoppingList.save();
    } catch (e) {
      console.log(e);
    }
  }

  async remove(id: number) {
    return await ShoppingList.delete(id);
  }
}
