import { key } from "../global/variables";

const fetchAPI = async ({ UrlString, locationKey, citySearch }) => {
  const urls = {
    locationUrl: `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${citySearch}`,
    currentForcast: `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${key}`,
    weeklyForcast: `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${key}`,
    favoritesDB: "https://weather-zeit.jordansh.now.sh/api/locations"
  };

  const result = await fetch(urls[UrlString]);
  const resultJSON = await result.json();

  return resultJSON;
};

export default fetchAPI;
