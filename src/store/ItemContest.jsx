import { createContext, useReducer } from "react";

const addItemHandler = () => {};
const removeItemHandler = () => {};

const initialState = {
  items: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  return initialState;
};

export const itemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: addItemHandler,
  removeItem: removeItemHandler,
});

const itemContextProvider = (props) => {
  //   const [itemStateReducer] = useReducer(itemReducer, initialState);
  return (
    <itemContext.Provider value={itemContext}>
      {props.children}
    </itemContext.Provider>
  );
};

export default itemContextProvider;
