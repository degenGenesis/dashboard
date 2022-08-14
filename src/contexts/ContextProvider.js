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
  
  // State Management
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(initialState);
  const [currentMode, setCurrentMode] = useState(false);
  const [themeSettings, setThemeSettings] = useState(true);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  // Light/Dark Mode
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  // Color Theme
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  // Event Handling
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true});
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ activeMenu, setActiveMenu, currentColor, setCurrentColor, currentMode, setCurrentMode, handleClick, isClicked, setIsClicked, initialState, screenSize, setScreenSize, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);