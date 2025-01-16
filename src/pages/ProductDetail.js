import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/ecommerceSlice";
import { fetchProductById } from "../api/productApi";
import "./ProductDetail.css"; // Import custom CSS file for hover effect

// Function to render stars based on the rating value
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-500">★</span>
      ))}
      {halfStars > 0 && <span className="text-yellow-500">☆</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-400">★</span>
      ))}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false); // State for button animation
  const dispatch = useDispatch(); // For dispatching actions

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id); // Fetch product by ID
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product details");
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    setIsAnimating(true); // Trigger animation
    setTimeout(() => {
      dispatch(addToCart(product));  // Add product to cart
      setIsAnimating(false);  // Reset animation
    }, 500);  // Set timeout to match animation duration
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Destructure the reviews and rating from the product object
  const { title, image, description, price, rating, reviews } = product;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex">
        <div className="w-1/2 mr-6">
          {/* Image with hover zoom effect */}
          <div className="image-zoom">
            <img
              src={image}
              alt={title}
              className="product-image zoom"
            />
          </div>
        </div>
        <div className="w-1/2">
          <p>{description}</p>
          <p className="text-gray-500">${price}</p>

          {/* Star rating display */}
          <div className="mt-2">
            <StarRating rating={rating.rate} />
            <span className="ml-2">{rating.count} reviews</span>
          </div>

          {/* User reviews */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">User Reviews</h3>
            {reviews && reviews.length > 0 ? (
              <div>
                {reviews.map((review, index) => (
                  <div key={index} className="mt-4">
                    <p className="font-semibold">{review.username}</p>
                    <StarRating rating={review.rating} />
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>

          {/* Add to Cart button with animation */}
          <button
            className={`bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 transition-transform transform ${isAnimating ? "scale-110" : "scale-100"}`}
            onClick={handleAddToCart}
          >
            {isAnimating ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
