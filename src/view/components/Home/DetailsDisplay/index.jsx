import React, { useContext } from "react";
import { GlobalContext } from "../../../../state/GlobalContext";
import { flexbox } from "../../../../styles/mixin";
import styled from "styled-components";
import TodaysForcast from "./TodaysForcast";
import WeeklyForcast from "./WeeklyForcast";

const DetailsDisplay = () => {
  const { isLoading, tempUnit } = useContext(GlobalContext);

  const findDay = number => {
    const date = new Date(number * 1000);
    return String(date).slice(0, 3);
  };

  const subString = (minF, maxF) => {
    if (tempUnit === "Metric") {
      const minC = Math.round((5 / 9) * (minF - 32));
      const maxC = Math.round((5 / 9) * (maxF - 32));
      return `${minC} - ${maxC}`;
    }

    return `${minF} - ${maxF}`;
  };

  return (
    <Wrapper>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <MainDetail>
          <TodaysForcast findDay={findDay} subString={subString} />
          <WeeklyForcast findDay={findDay} subString={subString} />
        </MainDetail>
      )}
    </Wrapper>
  );
};

export default DetailsDisplay;

const Wrapper = styled.div`
  ${flexbox({ jc: "center", ai: "flex-start" })};
  flex-basis: 100%;
  height: 350px;
  flex-wrap: wrap;
`;

const MainDetail = styled.div`
  flex-basis: 100%;
  height: 60%;
  margin: 20px 0 0 0;
  border-radius: 5px;
  ${flexbox()}
  flex-wrap: wrap;
`;
