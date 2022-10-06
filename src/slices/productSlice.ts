import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Product, SelectedProductState } from "../types/reduxState";

const initialState: SelectedProductState = {
  selectedProducts: [],
  subTotal: 0,
};

// Redux Slice for selected products
export const productSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // Adds the checked product to the selected products array
    addProduct: (state, action: PayloadAction<Product>) => {
      const { payload } = action;
      // check if product exists
      const productExists =
        state.selectedProducts.filter((product) => product.id === payload.id)
          .length > 0;
      if (!productExists) {
        state.selectedProducts = [...state.selectedProducts, payload];
      }
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      // Revmoves the unchecked product from the selected products array
      const { payload } = action;
      // check if product exists
      const productExists =
        state.selectedProducts.filter((product) => product.id === payload.id)
          .length > 0;
      if (productExists) {
        const filteredProduct = state.selectedProducts.filter(
          (product: Product) => product.id !== payload.id
        );
        state.selectedProducts = filteredProduct;
      }
    },
    clearProducts: (state) => {
      // Clear all the selected products
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
