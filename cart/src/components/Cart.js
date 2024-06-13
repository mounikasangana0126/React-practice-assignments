import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../actions/AddToCart";
import "../App.css";

const Cart = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleIncrement = () => {
    dispatch(updateItem(item.id, item.quantity + 1));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateItem(item.id, item.quantity - 1));
    }
  };

  return (
    <div className="bill-item">
      <div>
        <p>{item.name}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>${(item.price * item.quantity).toFixed(2)}</p>
      <p>
        <button onClick={handleRemove}>Remove</button>
      </p>
    </div>
  );
};

export default Cart;
