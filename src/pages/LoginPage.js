import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";  // To redirect after login

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();  // Access the login function from UserContext
  const navigate = useNavigate();  // Use navigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here, you can add your authentication logic, for now it's mocked
    if (email === "test@example.com" && password === "password123") {
      login({ email });  // Mock user login (replace with real auth logic)
      navigate("/");  // Redirect to homepage or cart after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
