import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ShoppingListController } from './../shopping-list/shopping-list.controller';
import { ShoppingList } from './../shopping-list/entities/shopping-list.entity';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let productController: ProductsController;
  let productService: ProductsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: {},
        },
        ProductsService,
        {
          provide: getRepositoryToken(ShoppingList),
          useValue: {},
        },
      ],
    }).compile();

    productController = module.get<ProductsController>(ProductsController);
    productService = module.get<ProductsService>(ProductsService);
  });
});
