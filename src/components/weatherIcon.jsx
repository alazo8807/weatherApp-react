import React, { Component } from "react";
import "./weatherIcon.css";

const renderIcon = name => {
  switch (name) {
    case "sun-shower":
      return (
        <div class="icon sun-shower">
          <div class="cloud" />
          <div class="sun">
            <div class="rays" />
          </div>
          <div class="rain" />
        </div>
      );
    case "thunder-storm":
      return (
        <div class="icon thunder-storm">
          <div class="cloud" />
          <div class="lightning">
            <div class="bolt" />
            <div class="bolt" />
          </div>
        </div>
      );
    case "cloudy":
      return (
        <div class="icon cloudy">
          <div class="cloud" />
          <div class="cloud" />
        </div>
      );
    case "flurries":
      return (
        <div class="icon flurries">
          <div class="cloud" />
          <div class="snow">
            <div class="flake" />
            <div class="flake" />
          </div>
        </div>
      );
    case "sunny":
      return (
        <div class="icon sunny">
          <div class="sun">
            <div class="rays" />
          </div>
        </div>
      );
    case "rainy":
      return (
        <div class="icon rainy">
          <div class="cloud" />
          <div class="rain" />
        </div>
      );
    default:
      break;
  }
};

const WeatherIcon = ({ sky }) => {
  return <div className="icon-wrapper">{renderIcon(sky)}</div>;
};

export default WeatherIcon;
