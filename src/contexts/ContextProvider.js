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
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

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