import React, { useContext } from "react";
import { GlobalContext } from "../../../../state/GlobalContext";
import { flexbox } from "../../../../styles/mixin";
import styled from "styled-components";

const WeeklyForcast = ({ findDay, subString }) => {
  const { heroWeeklyForcast } = useContext(GlobalContext);

  const weatherBoxes = [];

  const createWeatherBoxes = () => {
    for (let i = 1; i < 5; i++) {
      const maxF =
        heroWeeklyForcast.DailyForecasts[i].Temperature.Maximum.Value;
      const minF =
        heroWeeklyForcast.DailyForecasts[i].Temperature.Minimum.Value;

      weatherBoxes.push(
        <SmallWeatherBox key={i}>
          <SmallWeatherContainer weatherImage={maxF}>
            <SmallWeatherHeaderh3>
              {findDay(heroWeeklyForcast.DailyForecasts[i].EpochDate)}
            </SmallWeatherHeaderh3>
            <SmallWeatherSubDetailsh4>
              {subString(minF, maxF)}
            </SmallWeatherSubDetailsh4>
          </SmallWeatherContainer>
        </SmallWeatherBox>
      );
    }
    return weatherBoxes;
  };

  return <SmallForcastContainer>{createWeatherBoxes()}</SmallForcastContainer>;
};

export default WeeklyForcast;

const SmallForcastContainer = styled.div`
  ${flexbox({ jc: "space-between" })};
  flex-basis: 98%;
  flex-wrap: wrap;
`;

const SmallWeatherBox = styled.div`
  text-align: center;
  flex-basis: 23.5%;
  height: 100px;
  margin: 0 0 15px 0;

  @media (max-width: 800px) {
    flex-basis: 48%;
  }
`;

const SmallWeatherContainer = styled.div`
  border-radius: 3px;
  color: white;
  ${flexbox()};
  flex-wrap: wrap;
  margin-top: 20px;
  background-image: ${({ weatherImage }) =>
    weatherImage > 77 ? `url('SmallSunnyBG.PNG')` : `url('SmallColdBG.PNG')`};
  background-color: ${({ weatherImage }) =>
    weatherImage > 77 ? `red` : "blue"};
  background-color: #cccccc;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SmallWeatherHeaderh3 = styled.h3`
  flex-basis: 100%;
  height: 10%;
`;
const SmallWeatherSubDetailsh4 = styled.h4``;
