import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
};

const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = []; // Clear the cart when this action is dispatched
    },
    // Add other reducers like addToWishlist, removeFromWishlist, etc.
  },
});

export const { addToCart, removeFromCart, clearCart } = ecommerceSlice.actions;

export default ecommerceSlice.reducer;
