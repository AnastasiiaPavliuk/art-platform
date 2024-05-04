import { useLoaderData } from "react-router-dom";
import { getTowns } from "../services/artwork";
import TownCard from "../components/TownCard";

const loader = async () => {
  const artworks = await getTowns();
  return { artworks };
};

export default function OverviewPage() {
  const { artworks } = useLoaderData();
  //console.log(artworks);

  return (
    <div className="artworks-container">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="artwork-card">
          <TownCard town={artwork} artworkId={artwork.id}/>
        </div>
      ))}
    </div>
  );
}

OverviewPage.loader = loader;
