import React, { Component, useState } from "react";
import axios from "axios";
import Temp from "./Temp";

class Geo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
      cityName: "",
      lat: null,
      lon: null,
    };
  }
  getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        this.setState({
          countryName: data.country_name,
          cityName: data.city,
          latitude: data.latitude,
          longitude: data.longitude,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getGeoInfo();
  }

  render() {
    return (
      <div class="pa3 fw3">
        <Temp lat={this.state.latitude} lon={this.state.longitude} />
        <p class="f6 lh-copy">
          {this.state.cityName}, {this.state.countryName}
        </p>
      </div>
    );
  }
}

export default Geo;
