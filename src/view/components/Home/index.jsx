import React from "react";
import styled from "styled-components";
import SearchBar from "../Home/SearchBar";
import HeroComponent from "../Home/HeroComponent";
import DetailsDisplay from "../Home/DetailsDisplay";
import { flexbox } from "../../../styles/mixin";

const Home = () => {
  return (
    <Wrapper>
      <SearchBar />
      <HeroComponent />
      <DetailsDisplay />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  ${flexbox()}
  flex-basis: 100%;
  flex-wrap: wrap;
`;
