import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
  products: [],
};

const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
     // Existing reducers...
     clearCart: (state) => {
      state.cart = []; // Clear the cart
    },
    // Add to Cart
addToCart: (state, action) => {
  const product = action.payload;
  const existingProduct = state.cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1; // Increase quantity if already in cart
  } else {
    state.cart.push({ ...product, quantity: 1 }); // Add product with quantity 1
  }
},

    // Remove from Cart
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id); // Remove item by ID
    },

    // Add to Wishlist
    addToWishlist: (state, action) => {
      const product = action.payload;
      const existingProduct = state.wishlist.find((item) => item.id === product.id);
      if (!existingProduct) {
        state.wishlist.push(product); // Add product if not already in wishlist
      }
    },

    // Remove from Wishlist
removeFromWishlist: (state, action) => {
  const id = action.payload;
  state.wishlist = state.wishlist.filter((item) => item.id !== id); // Remove product from wishlist
},
    // Update Product Quantity (for increasing/decreasing quantity in the cart)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity = quantity; // Update the quantity
      }
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  addToWishlist, 
  removeFromWishlist, 
  updateQuantity 
} = ecommerceSlice.actions;

export default ecommerceSlice.reducer;
