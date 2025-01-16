import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { useUser } from "../contexts/UserContext"; // Import useUser hook

const Header = () => {
  const cartCount = useSelector((state) => state.ecommerce.cart.length);
  const wishlistCount = useSelector((state) => state.ecommerce.wishlist.length);
  const { user, logout } = useUser(); // Access user data and logout function from UserContext

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          E-Shop
        </Link>
        <nav className="space-x-6">
          {/* Home Icon */}
          <Link to="/" className="text-white text-xl hover:text-gray-400 mr-4">
            <FaHome /> {/* Home Icon */}
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart ({cartCount})
          </Link>
          <Link to="/wishlist" className="hover:underline">
            Wishlist ({wishlistCount})
          </Link>
          <Link to="/checkout" className="hover:underline">
            Checkout
          </Link>
        </nav>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {/* If user is logged in, show email and logout button */}
          {user ? (
            <div className="flex items-center">
              <span className="mr-4 text-white">Hello, {user.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            // If not logged in, show login link
            <Link to="/login" className="text-white hover:text-gray-400">
              Login
            </Link>
          )}
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 rounded-lg text-black"
          />
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
