import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../redux/slices/ecommerceSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.ecommerce.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleIncreaseQuantity = (product) => {
    dispatch(addToCart(product)); // Increase quantity
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(
        updateQuantity({ id: product.id, quantity: product.quantity - 1 })
      ); // Decrease quantity
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id)); // Remove product from cart
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  // Handle checkout click
  const handleCheckoutClick = () => {
    navigate("/checkout"); // Redirect to checkout page
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className="px-3 py-1 border border-gray-500 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className="px-3 py-1 border border-gray-500 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>Your cart is empty.</div>
        )}
      </div>

      {/* Total Price Breakdown */}
      {cartItems.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Price Breakdown</h2>
          <div className="flex justify-between mt-2">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping:</span>
            <span>${(totalPrice > 50 ? 0 : 5).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Tax:</span>
            <span>${(totalPrice * 0.1).toFixed(2)}</span> {/* Assuming a 10% tax rate */}
          </div>
          <div className="flex justify-between mt-4 font-bold text-xl">
            <span>Total:</span>
            <span>
              ${(
                totalPrice +
                (totalPrice > 50 ? 0 : 5) +
                totalPrice * 0.1
              ).toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <div className="mt-6">
            <button
              onClick={handleCheckoutClick} // Handle checkout button click
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
