import React from "react";
import styled from "styled-components";
import SearchButtons from "./SearchButtons";
import SearchField from "./SearchField";

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchButtons />
      <SearchField />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-wrap: wrap;
`;
