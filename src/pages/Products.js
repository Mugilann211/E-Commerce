import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../redux/slices/ecommerceSlice";
import { fetchProducts } from "../api/productApi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// StarRating component to display ratings as stars
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-500">
          ★
        </span>
      ))}
      {halfStars > 0 && <span className="text-yellow-500">☆</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-400">
          ★
        </span>
      ))}
    </div>
  );
};

// Main Products component
const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({
    category: "",
    price: [0, 1000],
    rating: 0,
  });
  const [sort, setSort] = useState("price");
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [animatingCart, setAnimatingCart] = useState(null);
  const [animatingWishlist, setAnimatingWishlist] = useState(null);

  // Pagination state
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Handle adding products to cart and wishlist
  const handleAddToCart = (product) => {
    setAnimatingCart(product.id);
    setTimeout(() => {
      dispatch(addToCart(product));
      triggerPopup(`Added "${product.title}" to cart!`);
      setAnimatingCart(null);
    }, 500);
  };

  const handleAddToWishlist = (product) => {
    setAnimatingWishlist(product.id);
    setTimeout(() => {
      dispatch(addToWishlist(product));
      triggerPopup(`Added "${product.title}" to wishlist!`);
      setAnimatingWishlist(null);
    }, 500);
  };

  // Trigger the popup message
  const triggerPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  // Filter and sort products based on selected criteria
  const handleCategoryChange = (e) => {
    setFilter({ ...filter, category: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFilter({ ...filter, price: [0, parseInt(e.target.value, 10)] });
  };

  const handleRatingChange = (e) => {
    setFilter({ ...filter, rating: parseInt(e.target.value, 10) });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Filter and sort the products
  const filteredProducts = products
    .filter((product) => {
      return (
        (filter.category ? product.category === filter.category : true) &&
        product.price >= filter.price[0] &&
        product.price <= filter.price[1] &&
        product.rating.rate >= filter.rating
      );
    })
    .sort((a, b) => {
      if (sort === "price") {
        return a.price - b.price;
      } else if (sort === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });

  // Paginate the filtered products
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {popupMessage}
        </div>
      )}

      {/* Filters and Sorting */}
      <div className="mb-4">
        <select onChange={handleCategoryChange} className="mr-2">
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>

        <input
          type="range"
          min="0"
          max="1000"
          value={filter.price[1]}
          onChange={handlePriceChange}
          className="mr-2"
        />
        <span>Price: ${filter.price[1]}</span>

        <select onChange={handleRatingChange} className="mr-2">
          <option value="0">Min Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        <select onChange={handleSortChange} className="mr-2">
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
            <StarRating rating={product.rating.rate} />
            <span className="text-sm text-gray-500 ml-2">
              ({product.rating.count} reviews)
            </span>
            <div className="flex justify-between">
              <motion.button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
                whileTap={{ scale: 0.9 }}
                animate={animatingCart === product.id ? { scale: 1.2 } : {}}
                transition={{ duration: 0.3 }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </motion.button>
              <Link
                to={`/product/${product.id}`}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View Details
              </Link>
              <motion.button
                className="text-red-500 ml-4 text-xl"
                whileTap={{ scale: 0.9 }}
                animate={animatingWishlist === product.id ? { scale: 1.2 } : {}}
                transition={{ duration: 0.3 }}
                onClick={() => handleAddToWishlist(product)}
              >
                ❤️
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {page} of {Math.ceil(filteredProducts.length / itemsPerPage)}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page * itemsPerPage >= filteredProducts.length}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
