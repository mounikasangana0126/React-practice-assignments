// components/ProductCard.js
import React from 'react';
import './App.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>{product.availabilityStatus == "In Stock" ? 'In Stock' : 'Low Stock'}</p>
      <img src={product.thumbnail} alt="" />
    </div>
  );
};

export default ProductCard;
