// components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import './App.css'

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
