import React from "react";
import ReactDOM from "react-dom";
import App from "../src/view/App";
import { StylingProvider } from "../src/state/StylesContext";
import { GlobalProvider } from "../src/state/GlobalContext";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GlobalProvider>
    <StylingProvider>
      <App />
    </StylingProvider>
  </GlobalProvider>,
  rootElement
);
