import React, { useContext } from "react";
import styled from "styled-components";
import * as t from "../../../../styles/themeStyles";
import { GlobalContext } from "../../../../state/GlobalContext";
import { flexbox } from "../../../../styles/mixin";
import FavoriteIndicator from "./FavoriteIndicator";

const HeroComponent = () => {
  const {
    heroCurrentForcast,
    cityNameDisplay,
    isLoading,
    tempUnit
  } = useContext(GlobalContext);

  return (
    <Wrapper>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <LocationView
          heroImage={
            "https://lonelyplanetimages.imgix.net/a/g/hi/t/8ec64b64e1d0805b1101f6c70c7f5b31-tel-aviv.jpg?sharp=10&vib=20&w=1200"
          }>
          <LocationInfo>
            <Details>{heroCurrentForcast[0].WeatherText}</Details>
            <Temp>
              {`${heroCurrentForcast[0].Temperature[tempUnit].Value}
              Â°${heroCurrentForcast[0].Temperature[tempUnit].Unit}`}
            </Temp>
            <Name>{cityNameDisplay}</Name>
          </LocationInfo>

          <FavoriteIndicator />
        </LocationView>
      )}
    </Wrapper>
  );
};

export default HeroComponent;

const Wrapper = styled.div`
  ${flexbox()}
  flex-wrap: wrap;
  flex-basis: 100%;
  height: 550px;
`;

const LocationView = styled.div`
  position: relative;
  ${flexbox({ jc: "flex-end" })}
  flex-basis: 100%;
  background-image: ${({ heroImage }) => `url(${heroImage})`};
  background-color: ${t.background}; /* Used if the image is unavailable */
  height: 100%; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

const LocationInfo = styled.div`
  text-shadow: 2px 2px 5px black;
  ${flexbox()}
  flex-wrap: wrap;
  flex-basis: 50%;
  height: 100%;
  width: 50%;
`;

const Details = styled.h2`
  ${flexbox()}
  flex-basis: 100%;
  /* height: 10px; */
  font-size: 43px;
  color: white;
  /* border: 1px solid red; */
`;

const Temp = styled(Details)``;

const Name = styled(Details)`
  font-size: 53px;
`;
