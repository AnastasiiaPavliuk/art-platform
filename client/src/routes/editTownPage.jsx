import { Form, redirect, useLoaderData } from "react-router-dom";
import { useState } from "react";
import EditTown from "../components/CreateTown";

import { getTown, updateTown } from "../services/artwork";
import { getAuthData } from "../services/auth";

const loader = async ({ request, params }) => {
  const { user } = getAuthData();
  if (!user) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }
  const artworkData = await getTown(params.id);
  if (user.id !== artworkData.owner.data.id) {
    return redirect(`/artwork/${params.id}`);
  }
   //console.log("Artwork fetched:", artworkData);
  return { artworkData };
};

const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const updatedArtwork = {
    color: parseInt(data.color, 10),
    buildings: JSON.parse(data.buildings),
  };
  console.log("Updated Artwork to send:", updatedArtwork);
  await updateTown(params.id, updatedArtwork);
  return redirect(`/artwork/${params.id}`);
};


export default function EditTownPage() {

  const { artworkData } = useLoaderData();
  const [color, setColor] = useState(artworkData.artworkData.color);
  const [buildings, setBuildings] = useState(artworkData.artworkData.buildings);

  const handleSliderChange = (event) => {
    const newColor = parseInt(event.target.value, 10);
    //console.log("New color:", newColor);
    setColor(newColor);
  };

  const addBuilding = () => {
    const lastId =
      buildings.length > 0 ? buildings[buildings.length - 1].id : 0;
    const newBuilding = {
      id: lastId + 1,
      height: Math.floor(Math.random() * 120) + 60,
      windows: Math.random() > 0.5 ? false : true,
    };
    setBuildings([...buildings, newBuilding]);
    //console.log("New buildings list:", buildings);
  };

  const deleteBuilding = (barId) => {
    setBuildings(buildings.filter((building) => building.id !== barId));
  };

  return (
    <Form method="POST">
      <EditTown
        color={color}
        handleSliderChange={handleSliderChange}
        buildings={buildings}
        addBuilding={addBuilding}
        deleteBuilding={deleteBuilding}
      />
      <input type="hidden" name="color" value={color} />
      <input type="hidden" name="buildings" value={JSON.stringify(buildings)} />
      <div>
        <input className="btn-save" type="submit" value="Update Artwork" />
      </div>
    </Form>
  );
}

EditTownPage.action = action;
EditTownPage.loader = loader;
