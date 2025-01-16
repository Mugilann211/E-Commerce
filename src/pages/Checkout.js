import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { clearCart } from "../redux/slice"; // Import the clearCart action

const Checkout = () => {
  const cart = useSelector((state) => state.ecommerce.cart);
  const dispatch = useDispatch(); // Initialize dispatch to dispatch actions
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Calculate the subtotal, tax, and shipping fee
  const calculateSummary = () => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // 10% tax
    const shippingFee = 5.99; // Fixed shipping fee
    const total = subtotal + tax + shippingFee;
    
    return { subtotal, tax, shippingFee, total };
  };

  const { subtotal, tax, shippingFee, total } = calculateSummary();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay before redirecting
    setTimeout(() => {
      // Dispatch action to clear the cart after order is placed
      dispatch(clearCart());

      // Navigate to success page
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="flex">
        <div className="w-1/2 mr-6">
          {/* User Details Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block">Shipping Address</label>
              <textarea
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                rows="4"
                required
              />
            </div>
          </form>
        </div>
        <div className="w-1/2">
          {/* Cart Summary */}
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="border p-4 rounded-lg">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.title} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Fee</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          onClick={handleSubmit}
          className={`bg-green-500 text-white px-6 py-3 rounded-lg transition duration-200 transform ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
