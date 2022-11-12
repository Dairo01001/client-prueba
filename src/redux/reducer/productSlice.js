/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addAllProducts: (state, { payload }) => {
      state.products = [...payload];
    },
  },
});

export const { addAllProducts } = productSlice.actions;

export default productSlice.reducer;
