import { PartialType } from '@nestjs/swagger';
import { CreateShoppingProductDto } from './create-shopping-product.dto';

export class UpdateShoppingProductDto extends PartialType(
  CreateShoppingProductDto,
) {}
