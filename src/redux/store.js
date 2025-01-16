import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'; // Import the new slice
import ecommerceReducer from './slices/ecommerceSlice'; // Your existing ecommerce slice

const store = configureStore({
  reducer: {
    ecommerce: ecommerceReducer,
    products: productReducer, // Add productReducer here
  },
});

export default store;
