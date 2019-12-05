import React, { useState, useContext } from "react";
import styled from "styled-components";
import * as t from "../../../../styles/themeStyles";
import { GlobalContext } from "../../../../state/GlobalContext";
import { key } from "../../../../global/variables";
import { flexbox } from "../../../../styles/mixin";
import { FaChevronUp } from "react-icons/fa";
import DropDown from "./DropDown";

const SearchField = () => {
  const { dropDownIsOpen, setDropDownIsOpen } = useContext(GlobalContext);
  const [searchString, setSearchString] = useState("");
  const [autoList, setAutoList] = useState([]);

  const openDropDown = () => {
    if (searchString !== "") setDropDownIsOpen(!dropDownIsOpen);
  };

  const getAutoComplete = searchText => {
    setDropDownIsOpen(true);
    if (searchText === "") setDropDownIsOpen(false);
    setSearchString(searchText);
    fetchAutoComplete();
  };

  const fetchAutoComplete = async () => {
    const autoCompleteApi = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${searchString}`;
    const fetchedACList = await fetch(autoCompleteApi);
    const jsonACList = await fetchedACList.json();
    // console.log(fetchedACList);
    setAutoList(jsonACList);
  };

  return (
    <Wrap>
      <Box onClick={openDropDown} DDisOpen={dropDownIsOpen}>
        <InputDiv>
          <Input
            placeholder="Tel-Aviv"
            onChange={e => getAutoComplete(e.target.value)}
          />
        </InputDiv>
        <Hevron DDisOpen={dropDownIsOpen} searchString={searchString}>
          <FaChevronUp />
        </Hevron>
      </Box>
      {dropDownIsOpen && (
        <DropDown
          autoList={autoList}
          searchString={searchString}
          setSearchString={setSearchString}
        />
      )}
    </Wrap>
  );
};

export default SearchField;

const Wrap = styled.div`
  ${flexbox()};
  flex-basis: 50%;
  flex-wrap: wrap;
  position: relative;
`;

const Box = styled.div`
  ${flexbox({ jc: "flex-start" })};
  color: ${t.text};
  background: ${t.element};
  padding: 0 5px;
  flex-basis: 100%;
  height: 30px;
  font-size: 20px;
  border-radius: ${({ DDisOpen }) => (DDisOpen ? "0 5px 0 0" : "0 5px 5px 0")};
  border: ${({ DDisOpen }) => (DDisOpen ? "1px white solid" : "none")};
  border-color: ${({ DDisOpen }) => (DDisOpen ? t.focused : "black")};

  /* box-shadow: ${({ DDisOpen }) =>
    DDisOpen ? `0px 0px 0px 1px cyan inset` : "none"}; */
  /* box-shadow:0px 0px 0px 5px black inset; */

  transition: 0.4s ease-out;
`;

/* ${({ theme }) => console.log("theme:", theme)} */

const InputDiv = styled.div`
  flex-basis: 94.5%;
  ${flexbox()}
`;

const Input = styled.input`
  width: 97%;
  background: none;
  border: none;
  outline: none;
`;

const Hevron = styled.div`
  transform: ${({ searchString }) =>
    searchString === "" ? "rotate(-90deg)" : ""};
  transform: ${({ DDisOpen }) => (DDisOpen ? "rotate(-180deg)" : "")};
  transition: 0.3s ease-out;

  &:hover {
    cursor: pointer;
  }
`;
