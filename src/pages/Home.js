import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      <div className="relative mb-6">
        <img
          src="https://via.placeholder.com/1200x400" // Replace with your deal banner image
          alt="Deal Banner"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl p-4">
          <span>Huge Summer Sale - Up to 50% Off!</span>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Product Card Example */}
          <div className="border p-4 rounded-lg shadow-md hover:shadow-xl">
            <img
              src="nothing.png"
              alt="Product"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Nothing 2A</h3>
            <p className="text-gray-600">$35.99</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-green-600">
              Add to Cart
            </button>
          </div>
          {/* Repeat the above block for more products */}
        </div>
      </div>

      {/* Deals Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Exclusive Deals</h2>
        <div className="flex space-x-4">
          <div className="border p-4 rounded-lg shadow-md hover:shadow-xl w-1/3">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Deal Product"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Apple Buds</h3>
            <p className="text-gray-600">$29.99 <span className="line-through">$39.99</span></p>
            <Link
              to="/products"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-blue-600"
            >
              Shop Now
            </Link>
          </div>
          <div className="border p-4 rounded-lg shadow-md hover:shadow-xl w-1/3">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Deal Product"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">OnePlus Buds 3</h3>
            <p className="text-gray-600">$19.99 <span className="line-through">$29.99</span></p>
            <Link
              to="/products"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-blue-600"
            >
              Shop Now
            </Link>
          </div>
          {/* Add more deal blocks as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
