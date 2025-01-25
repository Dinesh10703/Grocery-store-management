import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductSection from "./ProductSection";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";
import Cart from "./Cart";
import Banner from "./Banner";
import Dairy from "./Dairy";
import Billing from "./Billing";
import Terms from "./Terms"; // Import the Terms component

import Footer from "./Footer"; // Import Footer
import "./App.css";

function App() {
  const [cart, setCart] = useState({}); // State to track cart items with quantities

  // Function to add or update items in the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        // If product already exists, update the quantity
        newCart[product.id].quantity += 1;
      } else {
        // If product doesn't exist in the cart, add it with quantity 1
        newCart[product.id] = {
          ...product,
          quantity: 1, // Initialize quantity as 1 when first added
        };
      }
      return newCart;
    });
  };

  // Function to update the cart's item quantity or remove it
  const updateCart = (productId, quantity) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (quantity > 0) {
        newCart[productId].quantity = quantity; // Update quantity
      } else {
        delete newCart[productId]; // Remove item if quantity is 0
      }
      return newCart;
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart({});
  };

  return (
    <BrowserRouter>
      <div>
        {/* Navbar is displayed once for all pages */}
        <Navbar cart={cart} />

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <ProductSection
                  addToCart={addToCart}
                  cart={cart}
                  updateCart={updateCart}
                />
              </>
            }
          />
          {/* Fruits route */}
          <Route
            path="/fruits"
            element={
              <Fruits
                cart={cart}
                addToCart={addToCart}
                updateCart={updateCart}
              />
            }
          />
          {/* Vegetables route */}
          <Route
            path="/vegetables"
            element={
              <Vegetables
                cart={cart}
                addToCart={addToCart}
                updateCart={updateCart}
              />
            }
          />
          {/* Dairy route */}
          <Route
            path="/dairy"
            element={
              <Dairy
                cart={cart}
                addToCart={addToCart}
                updateCart={updateCart}
              />
            }
          />
          {/* Cart route */}
          <Route
            path="/cart"
            element={<Cart cart={cart} updateCart={updateCart} />}
          />
          {/* Billing route */}
          <Route
            path="/billing"
            element={<Billing cart={cart} clearCart={clearCart} />}
          />
          {/* Terms and Conditions route */}
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {/* Footer displayed on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
