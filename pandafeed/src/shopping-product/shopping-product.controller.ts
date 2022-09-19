import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShoppingProductService } from './shopping-product.service';
import { CreateShoppingProductDto } from './dto/create-shopping-product.dto';
import { UpdateShoppingProductDto } from './dto/update-shopping-product.dto';

@Controller('shopping-product')
export class ShoppingProductController {
  constructor(
    private readonly shoppingProductService: ShoppingProductService,
  ) {}

  @Post()
  create(@Body() createShoppingProductDto: CreateShoppingProductDto) {
    return this.shoppingProductService.create(createShoppingProductDto);
  }

  @Get()
  findAll() {
    return this.shoppingProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingProductService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShoppingProductDto: UpdateShoppingProductDto,
  ) {
    return this.shoppingProductService.update(+id, updateShoppingProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingProductService.remove(+id);
  }
}
