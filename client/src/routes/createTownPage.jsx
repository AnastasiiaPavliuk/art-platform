import { Form, redirect } from "react-router-dom";
import { useState } from "react";
import CreateTown from "../components/CreateTown";

import { createTown } from "../services/artwork";
import { getAuthData } from "../services/auth";

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
  const artworkData = JSON.parse(data.artwork);

  const payload = {
    artworkData: artworkData,
  };

  await createTown(payload);
  return null;
};

export default function CreateTownPage() {
  const [color, setColor] = useState(
    Math.floor(Math.random() * (210 - 160 + 1)) + 160
  );

  const handleSliderChange = (event) => {
    setColor(parseInt(event.target.value));
  };

  const [buildings, setBuildings] = useState([
    {
      id: 1,
      height: Math.floor(Math.random() * 120) + 60,
      windows: Math.random() > 0.5 ? false : true,
    },
    {
      id: 2,
      height: Math.floor(Math.random() * 120) + 60,
      windows: Math.random() > 0.5 ? false : true,
    },
    {
      id: 3,
      height: Math.floor(Math.random() * 120) + 60,
      windows: Math.random() > 0.5 ? false : true,
    },
    {
      id: 4,
      height: Math.floor(Math.random() * 120) + 60,
      windows: Math.random() > 0.5 ? false : true,
    },
  ]);

  const addBuilding = () => {
    const lastId =
      buildings.length > 0 ? buildings[buildings.length - 1].id : 0;
    const newBuilding = {
      id: lastId + 1,
      height: Math.floor(Math.random() * 120) + 60,
      windows: Math.random() > 0.5 ? false : true,
    };
    setBuildings([...buildings, newBuilding]);
  };

  const deleteBuilding = (barId) => {
    setBuildings(buildings.filter((building) => building.id !== barId));
  };

  const artworkData = {
    color: color,
    buildings: buildings,
  };

  const serializedData = JSON.stringify(artworkData);

  return (
    <Form method="POST">
        <CreateTown
          color={color}
          handleSliderChange={handleSliderChange}
          buildings={buildings}
          addBuilding={addBuilding}
          deleteBuilding={deleteBuilding}/>

      <input type="hidden" name="artwork" value={serializedData} />
      <div>
        <input className="btn-save" type="submit" value="Save Artwork" />
      </div>
    </Form>
  )
}

CreateTownPage.action = action;
CreateTownPage.loader = loader;
