import React from "react";
import CartItem from "./CartItem";
import { useContext } from "react";
import { itemContext } from "../store/ItemContest";

const Cart = (props) => {
  const { items, totalAmount } = useContext(itemContext);
  const totalPrice = `$${totalAmount.toFixed(2)}`;
  return (
    <section className="cart-box">
      <h2>Your Cart Items are here!</h2>
      <section className="overflow-ctr">
        {items.length < 1 ? (
          <h1>No Items !!!</h1>
        ) : (
          <>
            {items.map((fruit) => (
              <CartItem fruit={fruit} key={fruit.id} />
            ))}
          </>
        )}
      </section>

      <hr />
      <div className="total">
        <h1>Total Price</h1>
        <p>{totalPrice}</p>
      </div>
      <div className="btns">
        <button className="close-btn" onClick={props.hideCartHandler}>
          Close
        </button>
        <button className="order-btn" disabled={items.length === 0}>
          Go To Order
        </button>
      </div>
    </section>
  );
};

export default Cart;
