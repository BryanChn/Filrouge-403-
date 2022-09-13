import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingList } from './entities/shopping-list.entity';

@Injectable()
export class ShoppingListService {
  async create(createShoppingListDto: CreateShoppingListDto) {
    const shoppingList = new ShoppingList();

    shoppingList.done = false;

    shoppingList.date = new Date();

    return await shoppingList.save();
  }
  constructor(
    @InjectRepository(ShoppingList)
    private shoppingListRepository: Repository<ShoppingList>,
  ) {}

  findAll(): Promise<ShoppingList[]> {
    return this.shoppingListRepository.find();
  }

  findOne(id: number): Promise<ShoppingList> {
    return this.shoppingListRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    try {
      const shoppingList = await ShoppingList.findOneBy({ id });

      shoppingList.done = updateShoppingListDto.done;

      if (updateShoppingListDto.done) {
        shoppingList.endedDate = new Date();
      }
      return await shoppingList.save();
    } catch (e) {
      console.log(e);
    }
  }

  remove(id: number) {
    return this.shoppingListRepository.delete(id);
  }
}
