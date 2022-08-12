import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const ToDoContext = createContext();
// Wrap our app and provide the Data layer
export const ToDoProvider = ({ reducer, initialState, children }) => {
  return (
    <ToDoContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ToDoContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(ToDoContext);
