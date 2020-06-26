import React, { useState, useEffect } from 'react';
import './App.css';
import Getdate from './Getdate';

const App = () => {
  // const API_KEY = "6d81b48";
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  // const API_KEY = `${process.env.REACT_APP_API_KEY}`
  // console.log("API", API_KEY)
  // // const APP_CITY = "Lagos";
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [icon, setIcon] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Lagos');
  const [description, setDescription] = useState(null);






  useEffect(() => {
    fetchWeather(); // eslint-disable-next-line
  }, [query]);

  const fetchWeather = () => {
    const axios = require("axios");


    axios({
      "method": "GET",
      "url": `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}`,


    })
      .then((response) => {
        console.log(response)
        console.log(response.data.name)
        console.log(response.data.weather[0].icon)
        setTemp(response.data.main.temp)
        setHumidity(response.data.main.humidity)
        setCity(response.data.name)
        setWind(response.data.wind.speed)
        setIcon(response.data.weather[0].icon)
        setDescription(response.data.weather[0].description)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }


  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input
          type="text"
          placeholder='Enter your City'
          value={search}
          onChange={updateSearch}
        />
        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>

      </form>
      <hr />

      <div className="city">
        <i class="fa fa-map-marker" aria-hidden="true"></i> {city}
      </div>
      <Getdate />

      <div className="temp">
        {Math.floor(temp - 273)}
      </div>

      <div className="des">
        <p>{description}</p>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
      </div>
      <div className="wind">

        <p> <i class="fas fa-wind"></i> Wind: {wind} m/s</p>
        <p>Humidity: {humidity}</p>
      </div>
      <footer>
        <p><i class="fa fa-copyright" aria-hidden="true"></i> ActiveNoob</p>
      </footer>
      {/* <h1>CloverDev Weather App</h1>
      <form onSubmit={getSearch}>
        <input
          type="text"
          placeholder='Enter your City'
          value={search}
          onChange={updateSearch}
        />
        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>

      </form>
      <Forcast
        des={description}
        name={city}
        temp={feel}
        link={icon}
      /> */}
    </div>
  );
}

export default App