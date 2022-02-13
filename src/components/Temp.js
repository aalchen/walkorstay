import React, { useState, useEffect } from "react";
import axios from "axios";

const Temp = ({ lat, lon }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    if (lat && lon) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8f61a1e09924a4c204d0927cfe0ff964`
        )
        .then((response) => {
          let data = response.data;
          console.log(data);
          setState({
            temp: data.current.temperature,
            wind: data.current.wind_speed,
            precip: data.current.weather_descriptions[0],
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [lat, lon, setState]);
  const temp = Math.round(state.temp);
  const wind = Math.round(state.wind);
  if (temp < 0 || wind > 20) {
    return (
      <div>
        <div class="pa3 f1 lh-title">You should probably stay inside.</div>
        <div role="img" aria-label="Flower">
          🌺🌻🌲
        </div>
        <div class="pa3 f6 lh-copy">
          Temp: {temp}C | Wind: {wind}km/h | {state.precip}
        </div>
      </div>
    );
  } else if (temp > 0 && wind < 20) {
    return (
      <div>
        <div class="pa3 f1 lh-title">Bundle up, but it should be fine!</div>
        <div role="img" aria-label="Flower">
          🌺🌻🌲
        </div>
        <div class="pa3 f6 lh-copy">
          Temp: {temp}C | Wind: {wind}km/h | {state.precip}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div class="pa3 f1 lh-title">Yes, go for a walk!</div>
        <div role="img" aria-label="Flower">
          🌺🌻🌲
        </div>
        <div class="pa3 f6 lh-copy">
          Temp: {temp} C, Wind: {wind} km/h, {state.precip}.
        </div>
      </div>
    );
  }
};

export default Temp;
