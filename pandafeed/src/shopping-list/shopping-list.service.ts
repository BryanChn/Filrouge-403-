/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingList } from './entities/shopping-list.entity';

@Injectable()
export class ShoppingListService {
  async create(createShoppingListDto: CreateShoppingListDto) {
    let shoppingList = new ShoppingList();
    shoppingList.products = createShoppingListDto.products;
    shoppingList.done = false;
    shoppingList.quantity = createShoppingListDto.quantity;
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
      let shoppingList = await ShoppingList.findOneBy({ id });
      shoppingList.products = updateShoppingListDto.products;
      shoppingList.done = updateShoppingListDto.done;
      shoppingList.quantity = updateShoppingListDto.quantity;

      if (updateShoppingListDto.done) {
        let newShoppingList = new ShoppingList();
        newShoppingList.date = new Date();
        newShoppingList.save();
        shoppingList.endedDate = new Date();
      }
    } catch (e) {
      console.log(e);
    }
  }

  remove(id: number) {
    return this.shoppingListRepository.delete(id);
  }
}
