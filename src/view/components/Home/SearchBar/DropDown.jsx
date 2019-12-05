import React, { useContext } from "react";
import styled from "styled-components";
import * as t from "../../../../styles/themeStyles";
import { GlobalContext } from "../../../../state/GlobalContext";
import { flexbox } from "../../../../styles/mixin";
import { MdLocationOn, MdStarBorder } from "react-icons/md";

const DropDown = ({ autoList }) => {
  const { setLocationKey, setCityNameDisplay } = useContext(GlobalContext);

  const setKeyAndName = (cityKey, cityName, countryName) => {
    setCityNameDisplay(`${cityName}, ${countryName}`);
    setLocationKey(cityKey);
  };

  return (
    <Box>
      {autoList === 0 ? (
        <h1>loading</h1>
      ) : (
        autoList.map(Location => (
          <LocationRowBox
            key={Location.Key}
            onClick={() =>
              setKeyAndName(
                Location.Key,
                Location.LocalizedName,
                Location.Country.LocalizedName
              )
            }>
            <Icon>
              <MdLocationOn />
            </Icon>

            <NameTag>{`${Location.LocalizedName}, ${
              Location.Country.LocalizedName
            }`}</NameTag>

            <Favorite>
              <MdStarBorder />
            </Favorite>
          </LocationRowBox>
        ))
      )}
    </Box>
  );
};

export default DropDown;

const Box = styled.div`
  background: ${t.element};
  position: absolute;
  top: 40px;
  width: 100%;
  height: 300px;
  z-index: 1;
  border-radius: 0 0 2px 2px;
  box-shadow: inset 0px 0px 0px 1px ${t.text};
  ${flexbox()};
  flex-wrap: wrap;

  overflow-y: hidden;
  overflow-x: hidden;
`;

const LocationRowBox = styled.div`
  flex-basis: 100%;
  height: 50px;
  ${flexbox({ jc: "flex-start", ai: "base-line" })};
  align-content: center;
  border-bottom: 1px solid lightgray;
`;

const Icon = styled.div`
  font-size: 20px;
  flex-basis: 5%;
  padding-top: 15px;
`;

const NameTag = styled.div`
  flex-basis: 85%;
  padding-top: 15px;
  text-align: left;
`;

const Favorite = styled(Icon)`
  flex-basis: 10%;
`;
