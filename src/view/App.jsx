import React, { useContext } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import * as t from "../styles/themeStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext } from "../state/GlobalContext";
import { StylesContext } from "../state/StylesContext";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Favorites from "./components/Favorites";

const App = () => {
  const [styling] = useContext(StylesContext);
  const {
    dropDownIsOpen,
    setDropDownIsOpen,
    isBurgerOpen,
    setOpenBurger
  } = useContext(GlobalContext);

  const YouShellNotPass = () => {
    if (dropDownIsOpen) setDropDownIsOpen(false);
    if (isBurgerOpen) setOpenBurger(false);
  };

  return (
    <ThemeProvider theme={{ mode: styling }}>
      <Router>
        <GlobalStyles />
        <OneDivToRuleThemAll onClick={() => YouShellNotPass()}>
          <Nav />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </Wrapper>
        </OneDivToRuleThemAll>
      </Router>
    </ThemeProvider>
  );
};

export default App;

const OneDivToRuleThemAll = styled.div``;

const Wrapper = styled.div`
  background: ${t.background};
  height: 100vmax;
  max-height: 1500px;
  max-width: 1200px;
  min-width: 450px;
  margin: auto;
  padding-top: 50px;
  flex-wrap: wrap;
`;
