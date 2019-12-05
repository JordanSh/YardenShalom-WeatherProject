import React, { useContext } from "react";
import styled from "styled-components";
import * as t from "../../../../styles/themeStyles";
import { GlobalContext } from "../../../../state/GlobalContext";
import { flexbox } from "../../../../styles/mixin";
import { FaSearch, FaHome } from "react-icons/fa";

const SearchButtons = () => {
  const { dropDownIsOpen, setLocationKey, setCityNameDisplay } = useContext(
    GlobalContext
  );

  const telAviv = () => {
    setLocationKey("215854");
    setCityNameDisplay("Tel Aviv, Israel");
  };

  return (
    <Wrap>
      <HomeButtonBox DDisOpen={dropDownIsOpen} onClick={() => telAviv()}>
        {<FaHome />}
      </HomeButtonBox>
      <SearchButtonBox DDisOpen={dropDownIsOpen}>
        {<FaSearch />}
      </SearchButtonBox>
    </Wrap>
  );
};

export default SearchButtons;

const Wrap = styled.div`
  ${flexbox({ jc: "flex-end" })};
  flex-basis: 10%;
`;

const SearchButtonBox = styled.div`
  ${flexbox()};
  background: ${t.highlight};
  font-size: 18px;
  width: 30px;
  height: 30px;
  border-radius: ${({ DDisOpen }) => (DDisOpen ? "0" : "5px 0 0 5px")};
  text-align: center;
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const HomeButtonBox = styled(SearchButtonBox)`
  font-size: 21px;
  border-radius: ${({ DDisOpen }) => (DDisOpen ? "5px 0 0 5px" : "5px")};
  &:hover {
    border-radius: 50%;
    transition: 0.2s ease-in-out;
  }
`;
