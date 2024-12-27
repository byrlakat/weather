let apiKey = "4615f4co695t2a2a62347d829690ffb0";


function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value.trim();
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = city;

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    
 axios
        .get(apiUrl)
        .then(displayTemperature)
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
      }
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function formatData(date) {
    let minutes = date.getMinutes().toString().padStart(2,'0');
    let hours = date.getHours().toString().padStart(2,'0');
    let day = date.getDay();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector("#current-date");
let currentData = new Date();
currentDateElement.innerHTML = formatData(currentData);

function displayTemperature(response) {
        let temperature = Math.round(response.data.temperature.current);
        let temperatureElement = document.querySelector(".temperature");
        temperatureElement.innerHTML = temperature;

        let cityElement = document.querySelector("#current-city");
        
  
        let weatherTitle = document.querySelector("#weather-title");
        weatherTitle.innerHTML = response.temperature;
      }
       
      setInterval(() => {
    let currentDate = new Date();
    currentDateElement.innerHTML = formatData(currentDate);
}, 60000);
     