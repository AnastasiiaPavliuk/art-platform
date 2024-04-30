import { Form, redirect, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Bar from "../components/Bar";
import ColorSlider from "../components/ColorSlider";

import { createTown } from "../services/artwork";
import { getAuthData } from "../services/auth";
// import TownCard from "../components/TownCard";

//take the last last file


const loader = async ({ request }) => {
  const { user } = getAuthData();
  if (!user) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }
  return null;
};

const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("formdata", data);
  await createTown(data);
  return redirect(`/`);
};

export default function CreateTownPage() {

  const [style, setStyle] = useState({
   color: Math.floor(Math.random() * (210 - 160 + 1)) + 160,
    buildingAmount: 4,
  });

  const handleStyleChange = (variable, value) => {
    setStyle({ ...style, [variable]: value });
  };

  const [color, setColor] = useState({
    color: Math.floor(Math.random() * (210 - 160 + 1)) + 160,
  });

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

  const { artworks } = useLoaderData();

  return (
    <div className="app">
      <h1 className="heading">Generate your town!</h1>
      <ColorSlider style={style} onStyleChange={handleStyleChange}  handleSliderChange={handleSliderChange}/>
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
        <Form method="POST">
           <input type="hidden" name="drawing" value={JSON.stringify(style)} readOnly={true} />
           <button className='saveArtworkButton' type='submit'>Save Artwork</button>
        </Form>
        <button onClick={addBuilding}>+</button>
      </div>
    </div>
  );
}

CreateTownPage.action = action;
CreateTownPage.loader = loader;
