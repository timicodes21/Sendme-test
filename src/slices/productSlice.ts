import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Product, SelectedProductState } from "../types/reduxState";

const initialState: SelectedProductState = {
  selectedProducts: [],
  subTotal: 0,
};

export const productSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const { payload } = action;
      state.selectedProducts = [...state.selectedProducts, payload];
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      const { payload } = action;
      const filteredProduct = state.selectedProducts.filter(
        (product: Product) => product.id !== payload.id
      );
      state.selectedProducts = filteredProduct;
    },
    clearProducts: (state) => {
      state.selectedProducts = [];
    },
    calculateSubTotal: (state) => {
      let sum = 0;
      if (state.selectedProducts.length > 0) {
        state.selectedProducts.forEach((product) => (sum += product.price));
      }
      state.subTotal = sum;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.products,
      };
    },
  },
});

export const { addProduct, removeProduct, clearProducts, calculateSubTotal } =
  productSlice.actions;

export default productSlice.reducer;
