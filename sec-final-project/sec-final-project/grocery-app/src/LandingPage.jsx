import React, { useEffect, useState } from 'react';

function LandingPage() {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch products from JSON server
  useEffect(() => {
    fetch('http://localhost:5000/products') // Replace with your JSON server URL if different
      .then(response => response.json())
      .then(data => {
        setProducts(data); // Set the fetched products in state
        setLoading(false); // Set loading to false after fetching
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  // Render loading message if still fetching
  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="landing-page">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
