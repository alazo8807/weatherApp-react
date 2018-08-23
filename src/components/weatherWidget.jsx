import React, { Component } from "react";
import "./weatherWidget.css";
import WeatherIcon from "./common/weatherIcon";
import "bootstrap/dist/css/bootstrap.css";

class WeatherWidget extends Component {
  state = {
    data: {
      city: "Kitchener, ON, CAN",
      temperature: 25,
      uom: "C",
      humidity: 80,
      sky: "sunny"
    }
  };

  render() {
    const { city, temperature, uom } = this.state.data;

    return (
      <div className="widget-wrapper">
        <div className="row">
          <div className="col-6">
            <p className="float-left">Local Weather</p>
          </div>
          <div className="col ">
            <p className="float-right">{city}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="float-left">
              <WeatherIcon sky="sunny" />
            </div>
          </div>
          <div className="col">
            <h1 className="float-right">
              {temperature} <span>{uom}</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherWidget;
