
// import { useRouteError, useNavigate } from "react-router-dom";

import { useState } from "react";
import Bar from "../components/Bar";
import ColorSlider from "../components/ColorSlider";

export default function CreateTownPage() {
  const [color, setColor] = useState(Math.floor(Math.random() * (210 - 160 + 1)) + 160);

  const handleSliderChange = (event) => {
    setColor(parseInt(event.target.value));
  };

  const [buildings, setBuildings] = useState([
    { id: 1, height: Math.floor(Math.random() * 120) + 60, windows: Math.random() > 0.5 ? false : true },
    { id: 2, height: Math.floor(Math.random() * 120) + 60, windows: Math.random() > 0.5 ? false : true },
    { id: 3, height: Math.floor(Math.random() * 120) + 60, windows: Math.random() > 0.5 ? false : true },
    { id: 4, height: Math.floor(Math.random() * 120) + 60, windows: Math.random() > 0.5 ? false : true }
  ]);

  const addBuilding = () => {
    const lastId = buildings.length > 0 ? buildings[buildings.length - 1].id : 0;
    const newBuilding = {
      id: lastId + 1,
      height: Math.floor(Math.random() * 120) + 60,
      windows: Math.random() > 0.5 ? false : true
    };
    setBuildings([...buildings, newBuilding]);
  };

  const deleteBuilding = (barId) => {
    setBuildings(buildings.filter(building => building.id !== barId));
  };

  return (
    <div className="app">
      <h1 className="heading">Generate your town!</h1>
      <ColorSlider color={color} handleSliderChange={handleSliderChange}/>
      <div className="flex-row">
        <div className="city-cont" style={{ gap: '2px', borderColor: `hsl(${color}, 100%, 50%)` }}>
        <div className="arrow"><img className="arrow-img" src="./click-on-arrow.png" alt="click on a building" /></div>
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
