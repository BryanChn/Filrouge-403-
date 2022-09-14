import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingProductController } from './shopping-product.controller';
import { ShoppingProductService } from './shopping-product.service';

describe('ShoppingProductController', () => {
  let controller: ShoppingProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingProductController],
      providers: [ShoppingProductService],
    }).compile();

    controller = module.get<ShoppingProductController>(ShoppingProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
