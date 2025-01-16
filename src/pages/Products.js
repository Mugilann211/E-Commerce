import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "../redux/slices/ecommerceSlice";
import { fetchProducts } from "../api/productApi";
import { Link } from "react-router-dom"; 


const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ category: "", price: [0, 1000], rating: 0 });
  const [sort, setSort] = useState("price"); // Can be 'price' or 'rating'
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // Products per page

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const handleCategoryChange = (e) => {
    setFilter({ ...filter, category: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFilter({ ...filter, price: [0, e.target.value] });
  };

  const handleRatingChange = (e) => {
    setFilter({ ...filter, rating: e.target.value });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        (filter.category ? product.category === filter.category : true) &&
        product.price >= filter.price[0] &&
        product.price <= filter.price[1] &&
        product.rating >= filter.rating
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

  // Pagination logic
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Filters and Sorting */}
      <div className="mb-4">
        <select onChange={handleCategoryChange} className="mr-2">
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          {/* Add more categories as needed */}
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

      {/* Display Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
               {/* View Details Button */}
            <Link
              to={`/product/${product.id}`}
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View Details
            </Link>
              <button
                className="text-red-500 ml-4 text-xl"
                onClick={() => handleAddToWishlist(product)}
              >
                ❤️
              </button>
             
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Previous
        </button>
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
