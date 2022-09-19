import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto {
  quantity: number;
  minimum: number;
  essential: boolean;
}
