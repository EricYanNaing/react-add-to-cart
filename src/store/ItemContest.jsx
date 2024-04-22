import { createContext, useReducer, useState } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  if (action.type === "Add_Item") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existItem = state.items[existItemIndex];

    let updatedItems;

    if (existItem) {
      const updatedItem = {
        ...existItem,
        amount: action.item.amount + existItem.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "Remove_Item") {
    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    let updatedItems;
    const existItem = state.items[existItemIndex];

    const updatedTotalAmount = state.totalAmount - existItem.price;

    if (existItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existItem, amount: existItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return initialState;
};

export const itemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const ItemContextProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "Add_Item", item });
  };
  const removeItemHandler = (id) => {
    dispatchItem({ type: "Remove_Item", id });
  };

  const itemCtx = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <itemContext.Provider value={itemCtx}>
      {props.children}
    </itemContext.Provider>
  );
};

export default ItemContextProvider;
