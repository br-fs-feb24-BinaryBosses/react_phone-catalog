/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/types.ts';

interface CartState {
  products: Product[];
  quantity: number[];
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  quantity: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    incrementTotalPrice: (state: CartState, action: PayloadAction<Product>) => {
      state.totalPrice += action.payload.priceRegular;
      state.quantity[state.products.findIndex(e => e.id === action.payload.id)] += 1;
    },
    decreaseTotalPrice: (state: CartState, action: PayloadAction<Product>) => {
      state.totalPrice -= action.payload.priceRegular;
      state.quantity[state.products.findIndex(e => e.id === action.payload.id)] -= 1;
    },
    addProduct: (state: CartState, action: PayloadAction<Product>) => {
      const isInCartYet = state.products.findIndex(e => e.id === action.payload.id);

      if (isInCartYet === -1) {
        state.products.push(action.payload);
        state.quantity.push(1);
        state.totalPrice += action.payload.priceRegular;
      } else {
        state.quantity[isInCartYet] += 1;
        state.totalPrice += action.payload.priceRegular;
      }
    },
    removeProduct: (state: CartState, action: PayloadAction<Product>) => {
      const indxToErase = state.products.findIndex(e => e.id === action.payload.id);
      state.products.splice(indxToErase, 1);
      state.totalPrice -= action.payload.priceRegular * state.quantity[indxToErase];
      state.quantity.splice(indxToErase, 1);
    },
    updateAllProducs: (
      state: CartState,
      action: PayloadAction<{ products: Product[]; qtd: number[]; totalAmount: number }>,
    ) => {
      state.products = action.payload.products;
      state.quantity = action.payload.qtd;
      state.totalPrice = action.payload.totalAmount;
    },
  },
});

export const {
  incrementTotalPrice,
  decreaseTotalPrice,
  addProduct,
  removeProduct,
  updateAllProducs,
} = cartSlice.actions;
export default cartSlice.reducer;
