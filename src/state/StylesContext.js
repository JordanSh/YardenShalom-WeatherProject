import React, { useState, createContext } from "react";

const StylesContext = createContext();
const { Provider } = StylesContext;

const StylingProvider = ({ children }) => {
  const [styling, setStyling] = useState("dim");

  return <Provider value={[styling, setStyling]}> {children} </Provider>;
};

export { StylesContext, StylingProvider };
