import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/AddToCart';
import '../App.css'

const Items = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  return (
    <div className="cart-container">
      {products.map((item) => (
        <div key={item.id} className="item">
          <div>
          <img src={item.image} alt='images'/>
          </div>
          <div>
          <div><b>{item.name}</b></div> 
          <div>${item.price}</div>
          <button onClick={() => handleAddItem(item)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;