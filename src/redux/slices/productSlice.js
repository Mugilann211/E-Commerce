import { createSlice } from '@reduxjs/toolkit';

// Initial state for products
const initialState = {
  products: [],
  product: null, // Single product data for detail page
};

// Creating the slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Set products (from API or static data)
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // Set a single product for product detail
    setProductDetail: (state, action) => {
      state.product = action.payload;
    },
  },
});

// Export actions
export const { setProducts, setProductDetail } = productSlice.actions;

// Export the reducer
export default productSlice.reducer;
