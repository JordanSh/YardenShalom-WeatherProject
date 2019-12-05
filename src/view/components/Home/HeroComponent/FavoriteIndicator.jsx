import React, { useState, useEffect, useContext } from "react";
import fetchAPI from "../../../../service/weatherAPI";
import styled, { css, keyframes } from "styled-components";
import * as t from "../../../../styles/themeStyles";
import { GlobalContext } from "../../../../state/GlobalContext";
import { flexbox } from "../../../../styles/mixin";
import { MdStar } from "react-icons/md";

const FavoriteButton = () => {
  const {
    cityNameDisplay,
    locationKey,
    favoritesList,
    setFavoritesList
  } = useContext(GlobalContext);

  const [thisIsFavorite, setThisIsFavorite] = useState(false);
  const [animationFlag, setAnimationFlag] = useState(false);

  useEffect(() => {
    checkIfFav();
  }, [favoritesList]);

  const checkIfFav = () => {
    const favos = Array.from(favoritesList);
    for (let favorite of favos) {
      if (favorite.savedKey === locationKey) {
        setThisIsFavorite(true);
        break;
      } else if (favorite.savedKey !== locationKey) {
        setThisIsFavorite(false);
      }
    }
  };

  const saveToFavorites = async () => {
    setAnimationFlag(true);

    const dataPackage = {
      key: locationKey,
      savedName: cityNameDisplay,
      savedKey: locationKey
    };

    if (thisIsFavorite === false) {
      const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataPackage)
      };

      await fetch(
        "https://weather-zeit.jordansh.now.sh/api/locations",
        postOptions
      );
      await setFavoritesList(await fetchAPI({ UrlString: "favoritesDB" }));
    }

    if (thisIsFavorite === true) {
      const deleteOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataPackage)
      };

      await fetch(
        "https://weather-zeit.jordansh.now.sh/api/locations",
        deleteOptions
      );
      await setFavoritesList(await fetchAPI({ UrlString: "favoritesDB" }));
      setThisIsFavorite(thisIsFavorite === false);
    }

    setThisIsFavorite(!thisIsFavorite === true);
  };

  return (
    <FavoriteIndicator>
      <FadeBox
        animationFlag={animationFlag}
        onAnimationEnd={() => setAnimationFlag(false)}>
        {thisIsFavorite ? "Added to favorites" : "Removed from favorites"}
      </FadeBox>
      <FavoriteStar
        onClick={() => saveToFavorites()}
        thisIsFavorite={thisIsFavorite}>
        <MdStar />
      </FavoriteStar>
    </FavoriteIndicator>
  );
};
export default FavoriteButton;

const fade = keyframes`
    0%{
      opacity: 0;
      transform: translate(-10px, -15px);
    }
    20%{
      opacity: 0.01;
    }
    40%{
      opacity: 1;
      transform: translate(0, 0px);
    }
    80%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
`;

const FavoriteIndicator = styled.div`
  ${flexbox({ jc: "flex-end" })}
  position: absolute;
  top: 5px;
  right: 5px;
  width: 260px;
`;

const FadeBox = styled.div`
  ${flexbox()};
  font-size: 14px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 0 15px;
  height: 25px;
  opacity: 0;

  animation: ${({ animationFlag }) =>
    animationFlag
      ? css`
          ${fade} 4s ease-out
        `
      : ""};
`;

const FavoriteStar = styled.div`
  text-shadow: 3px 3px 5px black;
  font-size: 36px;
  margin-left: 5px;

  color: ${({ thisIsFavorite }) => (thisIsFavorite ? t.faved : "white")};
  transition: 0.15s ease-out;

  &:hover {
    cursor: pointer;
  }
`;
