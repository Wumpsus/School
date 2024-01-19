document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.getElementById('locationInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherInfo = document.getElementById('weatherInfo');
  
    getWeatherBtn.addEventListener('click', function () {
      const location = locationInput.value;
      if (location) {
        getWeatherData(location);
      } else {
        alert('Voer een locatie in.');
      }
    });
  
    function getWeatherData(location) {
      // API
      const apiKey = '69c059b930e00d7d7ba25cf134a4cd77';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Locatie niet gevonden.');
          }
          return response.json();
        })
        .then(data => {
          displayWeather(data);
        })
        .catch(error => {
          displayError(error.message);
        });
    }
  
    function displayWeather(data) {
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const description = data.weather[0].description;
  
      const weatherHtml = `<p>Temperatuur: ${temperature}°C</p>
                           <p>Luchtvochtigheid: ${humidity}%</p>
                           <p>Beschrijving: ${description}</p>`;
  
      weatherInfo.innerHTML = weatherHtml;
    }
  
    function displayError(message) {
      weatherInfo.innerHTML = `<p class="error">${message}</p>`;
    }
  });
  