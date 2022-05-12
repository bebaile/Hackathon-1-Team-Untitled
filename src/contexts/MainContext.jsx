import React, { createContext, useState } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);
  return (
    <MainContext.Provider value={{ isOnline, setIsOnline }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
