let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

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

function showWeather(response) {
  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = response.data.name;
  let todayDegree = document.querySelector("#todays-temp");
  let todaysTemp = Math.round(response.data.main.temp);
  let todayWeather = document.querySelector("#today-weather");
  todayDegree.innerHTML = `${todaysTemp}`;
  todayWeather.innerHTML = `${response.data.weather[0].main}`;
}
//

function submitCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let cityDisplay = document.querySelector("#city-display");
  cityDisplay.innerHTML = `${searchInput.value}`;
  let city = document.querySelector("#search").value;
  searchCity(city);
}
let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", submitCity);

//
function searchCity(city) {
  let apiKey = `2bd326a60dc89a53287e446e819664df`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
//

function showPosition(position) {
  let apiKey = `2bd326a60dc89a53287e446e819664df`;
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

//
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", getCurrentLocation);
//
