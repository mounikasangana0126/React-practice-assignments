import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/AddToCart';
import '../App.css'

const Items = ({ menuItems }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <span><img src={item.image} alt='images'/>{item.name} - ${item.price}</span>
          <button onClick={() => handleAddItem(item)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Items;