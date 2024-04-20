import React, { useContext, useState } from "react";
import { itemContext } from "../store/ItemContest";

const Card = ({ fruit }) => {
  const { name, description, price, id } = fruit;
  const { addItem } = useContext(itemContext);

  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmounNumber = +currentAmount;
  const addToCartHandler = () => {
    if (currentAmounNumber < 1 || currentAmounNumber > 5) {
      alert("Please enter valid number");
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmounNumber,
    });
    console.log(currentAmounNumber);
  };
  return (
    <div className="card">
      <div>
        <p className="card-title">{name}</p>
        <p className="card-description">{description}</p>
        <p className="card-price">$ {price}</p>
      </div>
      <div className="card-right">
        <input
          type="number"
          className="card-input"
          min={1}
          max={5}
          value={currentAmount}
          onChange={(e) => {
            setCurrentAmount(e.target.value);
            console.log(currentAmount);
          }}
        />
        <button className="card-button" onClick={addToCartHandler}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default Card;
