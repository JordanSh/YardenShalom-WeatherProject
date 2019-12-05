const fetchFavoritesAPI = async () => {
  const favoritesDB = "https://weather-zeit.jordansh.now.sh/api/locations";

  const result = await fetch(favoritesDB);
  const resultJSON = await result.json();

  return resultJSON;
};

export default fetchFavoritesAPI;
