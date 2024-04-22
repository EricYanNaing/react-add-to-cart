import React from "react";
import Cart from "./Cart";

const BackDrop = (props) => {
  return (
    <>
      {props.showCart && (
        <>
          <section className="backDrop" onClick={props.hideCartHandler} />
          <Cart hideCartHandler={props.hideCartHandler} />
        </>
      )}
    </>
  );
};

export default BackDrop;
