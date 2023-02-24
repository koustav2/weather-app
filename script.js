const API_KEY = 'e6bf05850dabed855e5302a71ff49055'

const getWeatherData = async (lat,lon) =>{
    const URL = 'https://api.openweathermap.org/data/3.0/onecall'
    const FULL_URL= `${URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    const weatherPromise = fetch(FULL_URL)
    return weatherPromise.then((response) => {
        return response.json();
      })
}

// getWeatherData()

const searchCity = () => {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    getWeatherData(lat,lon)
    .then((res)=>{
      showWeatherData(res);
    }).catch((error)=>{
      console.log(error);
      console.log("Something happend");
    })
  }

showWeatherData = (weatherData) =>{
    document.getElementById('city-lat').innerText=weatherData.lat
    document.getElementById('city-lon').innerText=weatherData.lon
    document.getElementById("temp").innerText = weatherData.current.temp;
    document.getElementById("weather-type").innerText = weatherData.current.weather[0].description;
    // document.getElementById('wind').innerText-weatherData.current.wind_speed
    document.getElementById('humidity').innerText=weatherData.current.humidity

}