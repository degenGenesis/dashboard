import React, { createContext, useContext, useState} from "react";

// createContext() Instance
const StateContext = createContext();

// Initial State
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  
  // State Variables Sidebar Menu, Menu Links, Screen Width
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  // Event Handling
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true});
  }

  return (
    <StateContext.Provider
      value={{ 
        activeMenu, setActiveMenu,
        isClicked, setIsClicked,
        screenSize, setScreenSize,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);