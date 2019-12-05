import React, { useContext } from "react";
import styled from "styled-components";
import * as t from "../../../styles/themeStyles";
import { GlobalContext } from "../../../state/GlobalContext";
import { flexbox } from "../../../styles/mixin";
import { MdStar } from "react-icons/md";

const CityCardDisplay = ({ favorite, position, cardWidth, cardMargin }) => {
  const { tempUnit } = useContext(GlobalContext);

  return (
    <CityCard
      key={favorite.savedKey}
      position={position}
      cardWidth={cardWidth}
      cardMargin={cardMargin}>
      <CardContextContainer>
        <CityNameContainer>{favorite.clippedName}</CityNameContainer>

        <CityCurrentCondition>{favorite.WeatherText}</CityCurrentCondition>

        <CityCurrentTemp>
          {`${favorite.Temperature[tempUnit].Value}
            Â°${favorite.Temperature[tempUnit].Unit}`}
        </CityCurrentTemp>

        <CityFavStatus>
          <MdStar />
        </CityFavStatus>
      </CardContextContainer>
    </CityCard>
  );
};

export default CityCardDisplay;

const cardheight = `200px`;

const CityCard = styled.div`
  text-shadow: 1px 1px 3px gray;
  flex: 0 0 auto;
  background: ${t.highlight};
  transform: ${({ position }) => "translateX(-" + position + "px)"};
  transition: 0.3s ease-out;

  border-bottom: 2px gray solid;
  height: ${cardheight};
  width: ${({ cardWidth }) => `${cardWidth}px`};
  margin: ${({ cardMargin }) => `${cardMargin}px`};
  border-radius: 3px;

  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 900px) {
    flex-basis: 45%;
  }
`;

const CardContextContainer = styled.div`
  ${flexbox({ dir: "column", jc: "space-around", ai: "flex-start" })};
  flex-wrap: wrap;
  flex-basis: 90%;
`;
const CityNameContainer = styled.div`
  font-size: 30px;
`;

const CityCurrentCondition = styled.div``;

const CityCurrentTemp = styled.div``;

const CityFavStatus = styled.div`
  width: 100%;
  text-align: end;
  font-size: 22px;
`;
