// components/FilterPanel.js
import React from 'react';
import './App.css'

const FilterPanel = ({ category, setCategory, priceRange, setPriceRange, availability, setAvailability }) => {
  return (
    <div className="filter-panel">
      <div>
        <label>Category:</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
          <option value="fragrances">Fragrances</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
      <div>
        <label>Price Range:</label>
        <input
          type="range"
          min="0"
          max="130"
          value={priceRange[0]}
          onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="130"
          value={priceRange[1]}
          onChange={e => setPriceRange([priceRange[0], +e.target.value])}
        />
        <span>${priceRange[0]} - ${priceRange[1]}</span>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={availability}
            onChange={e => setAvailability(e.target.checked)}
          />
          Only show available products
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
