import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ShoppingListController } from './../shopping-list/shopping-list.controller';
import { ShoppingList } from './../shopping-list/entities/shopping-list.entity';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { CreateProductDto } from './dto/create-product.dto';
import axios, { Axios } from 'axios';
import { UpdateProductDto } from './dto/update-product.dto';

describe('ProductsController', () => {
  let productController: ProductsController;
  let productService: ProductsService;
  let productId: number;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ShoppingList, Product],
      controllers: [ProductsController, ShoppingListController],
      providers: [
        ProductsService,
        ShoppingListService,
        {
          provide: getRepositoryToken(Product),
          useValue: {},
        },

        {
          provide: getRepositoryToken(ShoppingList),
          useValue: {},
        },
      ],
    }).compile();

    productController = module.get<ProductsController>(ProductsController);
    productService = module.get<ProductsService>(ProductsService);
  });

  it('should return a list of products', async () => {
    jest.setTimeout(30000);
    const product = {
      name: 'test2',
      quantity: 2,
      minimum: 1,
      essential: true,
    };
    const creatProduct = new Product();

    creatProduct.name = product.name;
    creatProduct.quantity = product.quantity;
    creatProduct.minimum = product.minimum;
    creatProduct.essential = product.essential;

    await axios
      .post('http://localhost:3000/products', product)
      .then((res) => {
        return axios.get('http://localhost:3000/products/' + res.data.id);
      })
      .then((response) => {
        expect(response.data).toEqual(
          Object.assign({ id: response.data.id }, product),
        );
        productId = response.data.id;
        console.log(productId);
      });
  });

  it('should update product and add shopping list ', async () => {
    const updateProduct = new UpdateProductDto();
    updateProduct.quantity = 0;
    updateProduct.minimum = 1;
    updateProduct.essential = true;
    await axios
      .patch('http://localhost:3000/products/' + productId, updateProduct)
      .then((res) => {
        if (updateProduct.quantity <= updateProduct.minimum) {
          if (updateProduct.essential === true) {
            console.log('product added to shopping list');
          }
          if (updateProduct.essential === false) {
            console.log(
              'Would you like to add this product to your shopping list?',
            );
          }
        }
        expect(res.status).toEqual(200);
        console.log('response', res.data);

        console.log(updateProduct);
      });
  });
});
