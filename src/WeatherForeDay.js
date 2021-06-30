import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForeDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}°`;
  }


    function formatDate() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day}`;
}

  return (
    <div>
      <div className="WeatherForecast-day">{formatDate()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="max">
          {maxTemp()}
        </span>
        <span className="min">
          {minTemp()}
        </span>
      </div>
    </div>
  );
}