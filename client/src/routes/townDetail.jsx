import { useLoaderData, useNavigate } from "react-router-dom";
import { getTown } from "../services/artwork";
import BarSaved from "../components/BarSaved";
import { deleteTown } from "../services/artwork";

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
  const navigate = useNavigate();

  const color = town.attributes.artworkData.color;
  const buildings = town.attributes.artworkData.buildings;

  const handleDelete = async () => {
    await deleteTown(town.id);
    navigate("/");
  };

  return (
    <>
      <div
        className="city-cont"
        style={{ borderColor: `hsl(${color}, 100%, 50%)` }}
      >
        {buildings.map((building) => (
          <BarSaved
            key={building.id}
            width={70}
            height={building.height}
            color={`hsl(${color}, 70%, 50%)`}
            windows={building.windows}
          />
        ))}
      </div>
      <button
        style={{ fontSize: "16px", padding: "0.5rem 1.5rem" }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
}

TownDetail.loader = loader;
