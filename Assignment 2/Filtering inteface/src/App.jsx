
import React, { useState, useEffect } from 'react';
import FilterPanel from './Filters';
import ProductList from './ProductList';
import './App.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [availability, setAvailability] = useState(false);

  useEffect(() => {
    // Fetch data from API
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        console.log(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  useEffect(() => {
    // Apply filters whenever they change
    let tempProducts = [...products];

    if (category) {
      tempProducts = tempProducts.filter(product => product.category === category);
    }

    tempProducts = tempProducts.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (availability) {
      tempProducts = tempProducts.filter(product => product.availabilityStatus == "In Stock" );
    }

    setFilteredProducts(tempProducts);
  }, [category, priceRange, availability, products]);

  return (
    <div className="App">
      <FilterPanel
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        availability={availability}
        setAvailability={setAvailability}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
