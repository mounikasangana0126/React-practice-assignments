import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import "../App.css";

const CartItems = () => {
  const items = useSelector((state) => state.items);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );  

  return (
    <div>
      <h2>Cart</h2>
      
          {items.map((item) => (
            <Cart key={item.id} item={item} />
          ))}
          
      <h3 className="total">Total: $<span>{totalPrice.toFixed(2)}</span></h3>
    </div>
  );
};

export default CartItems;
