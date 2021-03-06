// handeling state
import React, { createContext, useReducer, useContext } from "react";

// *** Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

// Define the context
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// Reducer

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem("theme") == null
        ? "dark"
        : window.localStorage.getItem("theme"),
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

// Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
