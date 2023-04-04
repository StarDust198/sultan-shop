import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { ICart, ICartItem } from 'interfaces';

const initialState: ICart = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const { code, quantity, priceEach } = action.payload;
      if (state[code]) {
        state[code].quantity += quantity;
        state[code].priceEach = priceEach;
      } else {
        state[code] = { quantity, priceEach };
      }
    },
    setCartItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const { code, quantity, priceEach } = action.payload;
      state[code].quantity = quantity;
      state[code].priceEach = priceEach;
    },
    removeOneFromCart: (state, action: PayloadAction<number>) => {
      const code = action.payload;
      if (state[code]) state[code].quantity -= 1;
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const code = action.payload;
      if (state[code]) state[code].quantity = 0;
    },
    clearCart: (state) => {
      return {};
    },
  },
});

export const {
  addToCart,
  removeOneFromCart,
  deleteFromCart,
  clearCart,
  setCartItemQuantity,
} = cartSlice.actions;

export const selectCartProducts = (state: RootState) => state.cart;
export const selectCartItemQuantity = (state: RootState, code: number) =>
  state.cart[code]?.quantity;
export const selectCartItems = (state: RootState) =>
  Object.values(state.cart).reduce((acc, item) => acc + item.quantity, 0);
export const selectCartTotalPrice = (state: RootState) =>
  Object.values(state.cart).reduce(
    (acc, item) => acc + item.quantity * item.priceEach,
    0
  );

export default cartSlice.reducer;
