import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts } = productSlice.actions; // Export the action for dispatching
export default productSlice.reducer; // Export the reducer to configure in the store
