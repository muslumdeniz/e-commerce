import { IProduct } from "./_product";

export interface IBasketProduct {
  id: number;
  product: IProduct;
  count: number;
}
