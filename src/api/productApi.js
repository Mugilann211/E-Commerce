export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export const fetchProductById = async (id) => {
  try {
    // Mocking the reviews and rating data for a product
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();

    // Add mock reviews for each product
    data.reviews = [
      {
        username: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend it.",
      },
      {
        username: "Jane Smith",
        rating: 5,
        comment: "Excellent quality. Worth the price.",
      },
    ];

    return data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw new Error("Failed to fetch product details");
  }
};
