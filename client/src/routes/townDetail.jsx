import { getTown } from "../services/artwork";
//import ColorSlider from "./components/ColorSlider";
import Bar from "../components/Bar";
import { Link, useLoaderData, } from "react-router-dom";
import { useState } from "react";

const loader = async ({ params }) => {
  const id = params.id;
  try {
    const town = await getTown(id);
    return { town };
  } catch (error) {
    console.error("Failed to fetch town details:", error);
    throw new Error("Town data is not available.");
  }
};



export default function TownDetail() {
  const { town } = useLoaderData();
  // Assuming user context or similar hook to get user data
   //const { user } = useUserContext();


  const color = town.attributes.artworkData.color;
  const buildings = town.attributes.artworkData.buildings;
  //const townId = town.id;
//const ownerUsername = town.owner.data.attributes.username;

  return (
    <>
      <div className="city-cont">
        {/* <ColorSlider color={color} /> */}
        <p>{`Color Code: ${color}`}</p>
        {buildings.map((building) => (
          <Bar
            key={building.id}
            barId_key={building.id}
            width={70}
            height={building.height}
            color={`hsl(${color}, 70%, 50%)`}
            windows={building.windows}
          />
        ))}
      </div>
    </>
  );
}

TownDetail.loader = loader;
