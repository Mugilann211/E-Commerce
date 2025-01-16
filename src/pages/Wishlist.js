import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishlist } from "../redux/slices/ecommerceSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.ecommerce.wishlist);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Move product to cart
    dispatch(removeFromWishlist(product.id)); // Optionally, remove from wishlist after adding to cart
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id)); // Remove product from wishlist
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500">${product.price}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
                onClick={() => handleAddToCart(product)} // Add to cart
              >
                Move to cart
              </button>
              <button
                className="text-red-500 ml-4 mt-4"
                onClick={() => handleRemoveFromWishlist(product.id)} // Remove from wishlist
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
