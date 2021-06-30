import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForeDay from "./WeatherForeDay";


export default function WeatherFore(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForeDay row mt-2">
        {forecast.map(function (day, index) {
          if (index < 6) {
            return (
              <div class="col">
                <div class="card pt-3 px-1 border-light">
                    <WeatherForeDay data={day} />
                  </div>
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
    );
  } else {
    let apiKey = "c52bf40f90a5a6e613ba93727930a589";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiurlbyCoor = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiurlbyCoor).then(handleResponse);

        return null;

  }
}
