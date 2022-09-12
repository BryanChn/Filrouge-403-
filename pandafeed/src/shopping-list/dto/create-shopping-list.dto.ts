export class CreateShoppingListDto {
  products: string;
  quantity: number;
  done = false;
  date: Date = new Date();
}
