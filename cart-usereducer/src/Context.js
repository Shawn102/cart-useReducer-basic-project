import React, { useReducer, useEffect, useContext } from "react";
import Data from "./Data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const MyAppContext = React.createContext();

const InitialState = {
  loading: false,
  cart: Data,
  total: 0,
  amount: 0,
};

export const MyAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const ClearList = () => {
    dispatch({ type: "CLEAR" });
  };
  const Remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const Increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const Decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const FetchingData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DATA_LOADED", payload: cart });
  };
  useEffect(() => {
    FetchingData();
  }, []);
  useEffect(() => {
    dispatch({ type: "COUNT_TOTAL" });
  }, [state.cart]);
  return (
    <MyAppContext.Provider
      value={{ ...state, ClearList, Remove, Increase, Decrease, FetchingData }}
    >
      {children}
    </MyAppContext.Provider>
  );
};

export const MyGlobalContext = () => {
  return useContext(MyAppContext);
};
