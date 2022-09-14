import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingProductService } from './shopping-product.service';

describe('ShoppingProductService', () => {
  let service: ShoppingProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingProductService],
    }).compile();

    service = module.get<ShoppingProductService>(ShoppingProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
