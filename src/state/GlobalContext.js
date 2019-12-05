import React, { useState, useEffect, createContext } from "react";
import fetchAPI from "../service/weatherAPI";
import { key } from "../global/variables";

const GlobalContext = createContext();
const { Provider } = GlobalContext;
let firstRunFlag = true;

const GlobalProvider = ({ children }) => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const [citySearch, setCitySearch] = useState("Tel%20Aviv");
  const [locationKey, setLocationKey] = useState("215854");
  const [hero, setHero] = useState([]);
  const [heroCurrentForcast, setHeroCurrentForcast] = useState([]);
  const [heroWeeklyForcast, setHeroWeeklyForcast] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [tempUnit, setTempUnit] = useState(`Metric`);
  const [dummyData, setDummyData] = useState([]);
  const [cityNameDisplay, setCityNameDisplay] = useState("Tel Aviv, Israel");
  const [favoritesList, setFavoritesList] = useState([]);
  const [isBurgerOpen, setOpenBurger] = useState(false);

  const DummyDataUrl = `https://api.myjson.com/bins/h19nn`;
  // <-- FETCH AUTOCOMPLETE LOCATION -->
  // const locationUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${citySearch}`;

  // // <-- FETCH CURRENT -->
  // const currentForcast = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${key}`;

  // // <-- FETCH WEEKLY -->
  // const weeklyForcast = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${key}`;

  useEffect(() => {
    fetchData();
  }, [locationKey]);

  const fetchData = async () => {
    const fetchedDummyList = await fetch(DummyDataUrl);
    const dummyList = await fetchedDummyList.json();

    if (firstRunFlag) {
      // <-- FETCH AUTOCOMPLETE LOCATION -->
      // const fetchedLocationDetails = await fetch(locationUrl);
      // const jsonLocationDetails = await fetchedLocationDetails.json();
      setHero(
        await fetchAPI({ UrlString: "locationUrl", locationKey, citySearch })
      );

      firstRunFlag = false;
    }

    // <-- FETCH CURRENT -->
    // const fetchedCurrentForcast = await fetch(currentForcast);
    // const jsonCurrentForcast = await fetchedCurrentForcast.json();

    // // <-- FETCH WEEKLY -->
    // const fetchedWeeklyForcast = await fetch(weeklyForcast);
    // const jsonWeeklyForcast = await fetchedWeeklyForcast.json();

    setDummyData(dummyList);
    setHeroCurrentForcast(
      await fetchAPI({ UrlString: "currentForcast", locationKey, citySearch })
    );
    setHeroWeeklyForcast(
      await fetchAPI({ UrlString: "weeklyForcast", locationKey, citySearch })
    );
    setFavoritesList(await fetchAPI({ UrlString: "favoritesDB" }));
    setIsLoading(false);
  };

  const state = {
    dropDownIsOpen,
    isBurgerOpen,
    dummyData,
    cityNameDisplay,
    citySearch,
    locationKey,
    hero,
    heroCurrentForcast,
    heroWeeklyForcast,
    favoritesList,
    tempUnit,
    isLoading
  };

  const actions = {
    setDropDownIsOpen,
    setOpenBurger,
    setDummyData,
    setCityNameDisplay,
    setCitySearch,
    setLocationKey,
    setHero,
    setHeroCurrentForcast,
    setHeroWeeklyForcast,
    setFavoritesList,
    setTempUnit,
    setIsLoading
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
};

export { GlobalContext, GlobalProvider, key };
