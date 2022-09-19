import { Injectable } from '@nestjs/common';
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

  findAll(): Promise<ShoppingList[]> {
    return ShoppingList.find();
  }

  findOne(id: number): Promise<ShoppingList> {
    return ShoppingList.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    try {
      const shoppingList = await ShoppingList.findOneBy({ id });
      ShoppingList;
      shoppingList.done = updateShoppingListDto.done;

      if (updateShoppingListDto.done) {
        shoppingList.endedDate = new Date();
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
