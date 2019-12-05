import React, { useContext } from "react";
import { GlobalContext } from "../../../../state/GlobalContext";
import { flexbox } from "../../../../styles/mixin";
import styled from "styled-components";

const TodaysForcast = ({ findDay, subString }) => {
  const { heroWeeklyForcast, tempUnit } = useContext(GlobalContext);

  return (
    <BigForcastContainer>
      <MainHeaderContainer>
        <MainWeatherHeaderh3>
          {findDay(heroWeeklyForcast.DailyForecasts[0].EpochDate)}
        </MainWeatherHeaderh3>
      </MainHeaderContainer>
      <MainWeatherSubDetailsh4>
        {subString(
          heroWeeklyForcast.DailyForecasts[0].Temperature.Minimum.Value,
          heroWeeklyForcast.DailyForecasts[0].Temperature.Maximum.Value
        )}
        {tempUnit === "Metric" ? ` Celsius` : ` Fahrenheit`}
      </MainWeatherSubDetailsh4>
    </BigForcastContainer>
  );
};

export default TodaysForcast;

const BigForcastContainer = styled.div`
  flex-basis: 98%;
  ${flexbox()};
  flex-wrap: wrap;
  text-align: center;

  border-radius: 3px;
  color: white;
  background-image: url("HorizontalBG.png"); /* from public folder! */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 100%; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

const MainHeaderContainer = styled.div`
  flex-basis: 100%;
  height: 50%;
`;

const MainWeatherHeaderh3 = styled.h3`
  flex-basis: 100%;
  height: 10%;
  font-size: 3rem;
`;
const MainWeatherSubDetailsh4 = styled.h4`
  font-size: 2rem;
`;
