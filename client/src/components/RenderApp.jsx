import "./RenderApp.css";
// import { useState } from "react";
import Bar from "./Bar";
import ColorSlider from "./ColorSlider";
import propTypes from "prop-types";

function RenderApp({ color, handleSliderChange, buildings, addBuilding, deleteBuilding}) {
  return (
    <div className="app">
      <h1 className="heading">Generate your town!</h1>
      <ColorSlider color={color} handleSliderChange={handleSliderChange} />
      <div className="flex-row">
        <div
          className="city-cont"
          style={{ gap: "2px", borderColor: `hsl(${color}, 100%, 50%)` }}
        >
          <div className="arrow">
            <img
              className="arrow-img"
              src="./click-on-arrow.png"
              alt="click on a building"
            />
          </div>
          {buildings.map((building) => (
            <Bar
              key={building.id}
              barId_key={building.id}
              width={70}
              height={building.height}
              color={`hsl(${color}, 70%, 50%)`}
              windows={building.windows}
              onDelete={() => deleteBuilding(building.id)}
            />
          ))}
        </div>
        <button onClick={addBuilding}>+</button>
      </div>
    </div>
  );
}

RenderApp.propTypes = {
  color: propTypes.number.isRequired,
  handleSliderChange: propTypes.func.isRequired,
  buildings: propTypes.array.isRequired,
  addBuilding: propTypes.func.isRequired,
  deleteBuilding: propTypes.func.isRequired,
};

export default RenderApp;
