import React, { useContext } from "react";
import { itemContext } from "../store/ItemContest";

const CartItem = ({ fruit }) => {
  const { addItem, removeItem } = useContext(itemContext);
  const addAmountHandler = () => {
    addItem({ ...fruit, amount: 1 });
  };
  const removeAmountHandler = () => {
    removeItem(fruit.id);
  };
  return (
    <div className="card cart">
      <div>
        <p className="card-title">{fruit.name}</p>
        <p className="card-price">$ {fruit.price}</p>
      </div>
      <div className="card-right">
        <p className="cart-quantity">
          <span>x{fruit.amount}</span>
        </p>
        <div className="quantity-ctr">
          <button className="quantity-btn m-ctr" onClick={removeAmountHandler}>
            -
          </button>
          <button className="quantity-btn" onClick={addAmountHandler}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
