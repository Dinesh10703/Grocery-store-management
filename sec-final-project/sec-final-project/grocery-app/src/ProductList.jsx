// import React, { useEffect, useState } from 'react';

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Grocery Products</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <strong>{product.name}</strong> - ${product.price} ({product.quantity} in stock)
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;
