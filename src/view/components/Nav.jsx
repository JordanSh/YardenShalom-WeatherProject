import React, { useContext } from "react";
import styled from "styled-components";
import * as t from "../../styles/themeStyles";
import { GlobalContext } from "../../state/GlobalContext";
import { Link } from "react-router-dom";
import { flexbox } from "../../styles/mixin";
import { GiKnifeFork, GiHamburger } from "react-icons/gi";
import ThemeButton from "./ThemeButton";

const Nav = () => {
  const { isBurgerOpen, setOpenBurger } = useContext(GlobalContext);

  return (
    <NavBox>
      <NavWrapper>
        <LogoDiv>
          <StyledLink to="/">
            <SiteLogo>The Weather Project</SiteLogo>
          </StyledLink>
        </LogoDiv>
        <LinksUL isBurgerOpen={isBurgerOpen}>
          <StyledLink to="/">
            <Li>Home</Li>
          </StyledLink>
          <StyledLink to="/favorites">
            <Li>Favorites</Li>
          </StyledLink>
        </LinksUL>
        <BurgerDiv onClick={() => setOpenBurger(!isBurgerOpen)}>
          {isBurgerOpen ? <GiKnifeFork /> : <GiHamburger />}
        </BurgerDiv>
        <ThemeButton />
      </NavWrapper>
    </NavBox>
  );
};
export default Nav;

const NavBox = styled.div`
  ${flexbox()}
  background-color: ${t.navStyling};
  width: 100vw;
  height: 50px;

  position: fixed;
  z-index: 999;

  transition: 0.1s ease-out;
`;

const NavWrapper = styled.div`
  ${flexbox({ jc: "space-between" })};
  width: 1200px;
  height: 100%;
  position: relative;
`;

const LogoDiv = styled.div`
  flex-basis: 50%;
`;

const LinksUL = styled.ul`
  ${flexbox({ jc: "space-around" })};
  flex-basis: 20%;

  list-style-type: none;
  @media (max-width: 800px) {
    ${flexbox({ dir: "column", jc: "flex-start", ai: "flex-start" })};
    position: absolute;
    width: 150px;
    top: 35px;
    right: ${({ isBurgerOpen }) => (isBurgerOpen ? "0" : "-190px")};
    height: 100vh;
    background: ${t.highlight};
    transition: 0.1s ease-out;
  }
`;

const Li = styled.li`
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${t.linkColor};
  font-weight: 500;

  &:focus,
  &:visited,
  &:link,
  &:active {
    color: ${t.linkColor};
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    color: deeppink;
  }

  @media (max-width: 800px) {
    border-bottom: 1px solid ${t.linkColor};
    width: 100%;
  }
`;

const BurgerDiv = styled.div`
  display: none;
  @media (max-width: 800px) {
    font-size: 28px;
    display: block;
    position: absolute;
    right: 15px;
    top: 10px;
    z-index: 2;
  }
`;

const SiteLogo = styled.h2``;
