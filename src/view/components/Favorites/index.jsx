import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetchFavoriteAPI from "../../../service/favoritesAPI";
import * as t from "../../../styles/themeStyles";
import { key } from "../../../global/variables";
import { flexbox } from "../../../styles/mixin";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CityCardDisplay from "./CityCardDisplay";

const CarouselComp = () => {
  const [position, setPosition] = useState(0);
  const [myFavsArray, setMyFavsArray] = useState([]);

  // <-- User/Dev changable values, WIP but functioning --> //
  // *! (cardWidth + (cardMargin * 2)) * numberOfCardsShownInRow = should not exceed 1000.
  //    in order to not overflow out side of set wrapper's max width.
  //    card width should not be under 170, so content will not overflow.
  //    try out 300 width and 3 cards shown / 400x2 / 200x5 *!
  const cardWidth = 200;
  const cardMargin = 7.5;
  const numberOfCardsShownInRow = 4;

  // should not be changed
  const cardAndMaring = cardWidth + cardMargin * 2;
  const scrollWidth = cardAndMaring * 1; // WIP, changing the value will change the amount of cards scrolled with each press - but will break the endpoint
  const carouselContainerWidth = cardAndMaring * numberOfCardsShownInRow;
  const endPointPosition = myFavsArray.length - numberOfCardsShownInRow;
  const widthEndPoint = endPointPosition * scrollWidth;

  const scrollLeft = () => {
    if (position >= scrollWidth) setPosition(position - scrollWidth);
  };

  const scrollRight = () => {
    if (position <= scrollWidth * endPointPosition)
      setPosition(position + scrollWidth);
    console.log(position);
  };

  //-----------------//

  useEffect(() => {
    fetchFavorites();
  }, []);

  // (1) ASYNC FETCH FOR THE FAVORITES API
  const fetchFavorites = async () => {
    const jsonFavsListFromDB = await fetchFavoriteAPI();
    const jsonFavsListFromDBArray = Array.from(jsonFavsListFromDB);

    // (2) WAITING FOR PROMISE.ALL TO FINISH CREATING A NEW ARRAY - BUILT FROM SINGLE SLOTS ARRAYS CONTAINING THE OBJECT (API SPECIFIC)
    const FavsArray = await Promise.all(
      jsonFavsListFromDBArray.map(async favorite => {
        const favKey = favorite.savedKey;

        const currentForcast = `https://dataservice.accuweather.com/currentconditions/v1/${favKey}?apikey=${key}`;

        const fetchedDetails = await fetch(currentForcast);
        const jsonDetails = await fetchedDetails.json();

        console.log(jsonDetails);
        const mutatedObject = {
          ...jsonDetails[0],
          clippedName: favorite.savedName
        };
        return mutatedObject;
      })
    );
    setMyFavsArray(FavsArray);
  };

  return (
    <Wrapper>
      <CarouselContainer carouselContainerWidth={carouselContainerWidth}>
        <CardsContainer position={position} widthEndPoint={widthEndPoint}>
          {position > 0 && (
            <ScrollLeft onClick={() => scrollLeft()}>
              <FaChevronLeft />
            </ScrollLeft>
          )}

          {myFavsArray.map(favorite => (
            <CityCardDisplay
              favorite={favorite}
              position={position}
              cardWidth={cardWidth}
              cardMargin={cardMargin}
            />
          ))}

          {position < scrollWidth * endPointPosition && (
            <ScrollRight onClick={() => scrollRight()}>
              <FaChevronRight />
            </ScrollRight>
          )}
        </CardsContainer>
      </CarouselContainer>
    </Wrapper>
  );
};

export default CarouselComp;

const Wrapper = styled.div`
  ${flexbox()};
`;

const CarouselContainer = styled.div`
  width: ${({ carouselContainerWidth }) => `${carouselContainerWidth}px`};
  color: ${t.text};
  display: flex;
  align-items: center;
  position: relative;
  background: ${t.background};

  @media (max-width: 900px) {
    width: 85%;
  }
`;

const CardsContainer = styled.div`
  ${flexbox({ jc: "space-between" })}
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow: hidden;

  background: ${t.navStyling};
  border-radius: 5px;
  box-shadow: 2px 2px 5px grey;

  position: relative;
  width: 100%;
  height: 30vh;
  margin-top: 50px;

  &::before {
    content: "";
    position: absolute;
    width: 20%;
    height: 100%;
    z-index: 1;
    display: ${({ position }) => (position === 0 ? "none" : "block")};
    background: ${t.gradiantLeft};

    @media (max-width: 900px) {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 80%;
    width: 20%;
    height: 100%;
    z-index: 1;
    display: ${({ position, widthEndPoint }) =>
      position < widthEndPoint ? "block" : "none"};
    background: ${t.gradiantRight};
    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-x: hidden;
  }
`;

// --------Scrollers--------- //

const ScrollLeft = styled.div`
  position: absolute;
  left: 1%;
  margin-top: auto;

  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: ${t.navStyling};
  box-shadow: 1px 1px 3px gray;
  color: ${t.text};
  z-index: 2;

  ${flexbox()}

  font-size: 14px;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const ScrollRight = styled(ScrollLeft)`
  left: 95%;
`;
