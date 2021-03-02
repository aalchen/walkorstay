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
            temp: data.main.temp,
            wind: data.wind.speed,
            precip: data.weather[0].description,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [lat, lon, setState]);
  const temp = Math.round(state.temp - 273.15);
  const wind = Math.round(state.wind * 3.6);
  if (temp < 15 || wind > 20) {
    return (
      <div>
        <p>
          Temp: {temp}C, Wind: {wind}km/h, {state.precip}.
        </p>
        <p>You should probably stay inside.</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Temp: {temp} C, Wind: {wind} km/h, {state.precip}.
        </p>
        <p>Yes, go for a walk!</p>
      </div>
    );
  }
};

export default Temp;
