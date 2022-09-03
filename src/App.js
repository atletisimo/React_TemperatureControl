import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");
  const increaseTemperature = () => {
    // setTemperatureValue(temperatureValue + 1);
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);
    if (newTemperature > 20) {
      setTemperatureColor("hot");
    }
  };
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if (newTemperature < 20) {
      setTemperatureColor("cold");
    }
  };
  return (
    <div className="temperature-display">
      <div className={`temperature ${temperatureColor}`}>
        {temperatureValue}°C
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};
export default App;
