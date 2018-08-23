import React, { Component } from "react";
import "./App.css";
import WeatherIcon from "./components/weatherIcon";

class App extends Component {
  state = {
    data: {
      temperature: 25,
      humidity: 80,
      sky: "sunny"
    }
  };

  render() {
    return (
      <div className="App">
        <h1>olfwapp</h1>
        <WeatherIcon sky="sunny" />
      </div>
    );
  }
}

export default App;
