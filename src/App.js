import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserProvider } from "./contexts/UserContext"; // Import UserProvider
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Success from "./pages/Success";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      {/* Wrap your entire app with the UserProvider to provide the user context */}
      <UserProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header /> {/* The Header will use the UserContext */}
            <main className="flex-grow container mx-auto p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/success" element={<Success />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </Provider>
  );
}

export default App;
