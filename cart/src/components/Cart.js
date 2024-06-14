import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, counter } from "../actions/AddToCart";
import "../App.css";

const Cart = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleIncrement = () => {
    dispatch(counter(item.id, item.quantity + 1));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(counter(item.id, item.quantity - 1));
    }
  };

  return (
    <div className="cart-item">
      <div>
        <img src={item.image}/>
      </div>
      <div>
        <p><b>{item.name}</b></p>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>${(item.price * item.quantity).toFixed(2)}</p>
      <p>
        <button onClick={handleRemove} className="remove">Remove</button>
      </p>
    </div>
  );
};

export default Cart;
