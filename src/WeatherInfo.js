import React from "react";
import Formatteddate from "./Formatteddate";
import WeatherIcon from "./WeatherIcon";
import Unitchange from "./unitchange";
import "bootstrap/dist/css/bootstrap.css";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row d-flex align-items-end">
        <div className="col">
          <h2 className="cityName">
            {props.data.city}
            <br />
          </h2>
          <p className="time">
            <Formatteddate date={props.data.date} />
          </p>
        </div>
        <div className="col">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={78}
          />
          <p class="tempDisplay">
            <Unitchange celsius={props.data.temperature} />
          </p>
        </div>
        <div className="col align-self-center">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <span className="tempmax">{props.data.max}</span> {"  "} C°{"  "}| {"  "}<span className="tempmax">{props.data.min}</span>{" "}C°
            </li>
            <li class="description list-group-item">{props.data.description}</li>
            <li class="list-group-item">Humidity: {props.data.humidity}%</li>
            <li class="list-group-item">Wind: {props.data.wind}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
