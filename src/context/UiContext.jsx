import React, { createContext, useContext } from "react";

const UiContext = createContext({});

const UiContextProvider = ({ children }) => {
  return <UiContext.Provider>{children}</UiContext.Provider>;
};

export default UiContextProvider;
