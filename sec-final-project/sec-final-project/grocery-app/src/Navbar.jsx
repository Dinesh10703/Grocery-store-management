import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cart }) {
  const [data, setData] = useState([]); // State to hold fetched data
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger toggle

  // Fetch data from API on component mount
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products.");
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Grocery Store</Link>
      </div>
      <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <Link to="/fruits">Fruits</Link>
        <Link to="/vegetables">Vegetables</Link>
        <Link to="/dairy">Dairy</Link>
        <Link to="/cart">Cart ({Object.keys(cart).length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
