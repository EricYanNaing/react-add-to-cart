import React from "react";
import CartItem from "./CartItem";

const frutis = [
  {
    id: 1,
    price: 9.99,
    name: "Banana",
    description: "Fresh Banana From Thailand",
    quantity: 1,
  },
  {
    id: 2,
    price: 7.99,
    name: "Apple",
    description: "Fresh Apple From Thailand",
    quantity: 3,
  },
  {
    id: 3,
    price: 8.99,
    name: "Mango",
    description: "Fresh Mango From Thailand",
    quantity: 2,
  },
];

const Cart = (props) => {
  return (
    <section className="cart-box">
      <h2>Carts</h2>
      {frutis.map((fruit) => (
        <CartItem fruit={fruit} key={fruit.id} />
      ))}
      <hr />
      <div className="total">
        <h1>Total Price</h1>
        <p>$ 400.00</p>
      </div>
      <div className="btns">
        <button className="close-btn" onClick={props.hideCartHandler}>
          Close
        </button>
        <button className="order-btn">Go To Order</button>
      </div>
    </section>
  );
};

export default Cart;
