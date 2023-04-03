export interface ICartItem {
  code: number;
  quantity: number;
  priceEach: number;
}

export interface ICart {
  [key: number]: {
    quantity: number;
    priceEach: number;
  };
}
