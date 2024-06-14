import React from 'react';
import Items from './components/Items';
import CartItems from './components/CartItems';

const products = [
  { id: 1, name: "Classic Margherita Pizza", price: 5.99 ,image:"https://cdn.dummyjson.com/recipe-images/1.webp"},
  { id: 2, name: 'Vegetarian Stir-Fry', price: 2.99,image:"https://cdn.dummyjson.com/recipe-images/2.webp" },
  { id: 3, name: 'Chocolate Chip Cookies', price: 1.99,image:"https://cdn.dummyjson.com/recipe-images/3.webp" },
  { id: 4, name: 'Chicken Alfredo Pasta', price: 6.09,image:"https://cdn.dummyjson.com/recipe-images/4.webp" },
  { id: 5, name: 'Mango Salsa Chicken', price: 1.29,image:"https://cdn.dummyjson.com/recipe-images/5.webp" },
  { id: 6, name: 'Quinoa Salad with Avocado', price: 3.99,image:"https://cdn.dummyjson.com/recipe-images/6.webp" },
  { id: 7, name: 'Tomato Basil Bruschetta', price: 5.54,image:"https://cdn.dummyjson.com/recipe-images/7.webp" },
  { id: 8, name: 'Beef and Broccoli Stir-Fry', price: 3.01,image:"https://cdn.dummyjson.com/recipe-images/8.webp" },
  { id: 9, name: 'Caprese Salad', price: 1.99,image:"https://cdn.dummyjson.com/recipe-images/9.webp" },
  // { id: 10, name: 'Shrimp Scampi Pasta', price: 3.45,image:"https://cdn.dummyjson.com/recipe-images/10.webp" },
];

const App = () => (
  <div>
    <h1>Restaurant Billing System</h1>
    <Items products={products} />
    <CartItems />
  </div>
);

export default App;