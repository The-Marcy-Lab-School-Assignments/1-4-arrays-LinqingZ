const favoriteLocations = ["New York City", "Jersey City"];
const addBostonToFavorites = (locations) => {
  locations.unshift("Boston");
};
console.log(favoriteLocations);
addBostonToFavorites(favoriteLocations);
console.log(favoriteLocations);