import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
      <p className="mb-4">Thank you for your purchase. Your order has been successfully placed.</p>
      <Link to="/" className="text-blue-500">Go back to homepage</Link>
    </div>
  );
};

export default Success;
