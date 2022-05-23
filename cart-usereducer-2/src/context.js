import React, { useReducer, useContext, useEffect } from "react";
import { reducer } from "./reducer";
import Data from "./data";

const url = "https://course-api.com/react-useReducer-cart-project";

const MyContext = React.createContext();

const initialState = {
  loading: false,
  carts: Data,
  total: 0,
  amount: 0,
};

export const MyAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ClearList = () => {
    dispatch({ type: "CLEAR_FULL_LIST" });
  };
  const Remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const Toggle = (id, theType) => {
    dispatch({ type: "TOGGLE", payload: { id, theType } });
  };
  const FetchingData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const jsonResponse = await response.json();
    dispatch({ type: "DATA_LOADED", payload: jsonResponse });
  };
  useEffect(() => {
    dispatch({ type: "COUNT_TOTAL" });
  }, [state.carts]);

  useEffect(() => {
    FetchingData();
  }, []);
  return (
    <MyContext.Provider
      value={{ ...state, ClearList, Remove, Toggle, FetchingData }}
    >
      {children}
    </MyContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(MyContext);
};
