import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherFore from "./WeatherFore";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({ ready: false });

  function updateCityname(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      max:  Math.round(response.data.main.temp_max),
      min:  Math.round(response.data.main.temp_min)
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchbyName();
  }

  function searchbyName() {
    let apiKey = "c52bf40f90a5a6e613ba93727930a589";
    let apiUrlbyName = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlbyName).then(handleResponse);
  }

  if (data.ready) {
    return (
      <div className="Weather">
        <div className="searchInput">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="city"
              placeholder="Enter City.."
              onChange={updateCityname}
            />
            {"  "}
            <input className="material-icons" type="submit" id="search" value="search" />
          </form>
          
        </div>
        <WeatherInfo data={data} />
        <WeatherFore coordinates={data.coordinates} />
      </div>
    );
  } else {
    searchbyName();
    return "Loading...";
  }
}
