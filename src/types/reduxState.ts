export interface Product {
  name: string;
  weight: string;
  price: number;
  id: number;
}

export interface ProductState {
  allProducts: Product[];
}

export interface SelectedProductState {
  selectedProducts: Product[];
  subTotal: number;
}
