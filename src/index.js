let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekDays[now.getDay()];

let today = document.querySelector("#today");
today.innerHTML = `${day} ${hours}:${minutes}`;

//

function showCityValue(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = `${searchInput.value}`;
}
let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", showCityValue);

//

let farenheitLink = document.querySelector("#farenheit-link");
let celsiusLink = document.querySelector("#celsius-link");
let todaysTemp = document.querySelector("#todays-temp");

farenheitLink.addEventListener("click", displayFarenheit);

function displayFarenheit(event) {
  event.preventDefault;
  todaysTemp.innerHTML = "66°";
}

celsiusLink.addEventListener("click", displayCelsius);

function displayCelsius(event) {
  event.preventDefault;
  todaysTemp.innerHTML = "19°";
}
