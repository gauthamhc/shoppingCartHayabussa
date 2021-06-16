import React, { createContext, useReducer, useEffect } from "react";
import CartItems from "../../data";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  amount: 0,
  total: 0,
  cart: CartItems,
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const clearItem = () => {
    dispatch({ type: "CLEAR" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <GlobalContext.Provider
      value={{ ...state, clearItem, increaseItem, decreaseItem, removeItem }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
