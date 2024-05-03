import { Link, useLoaderData } from "react-router-dom";
import { getTowns } from "../services/artwork";
import TownCard from "../components/TownCard";

const loader = async () => {
  const artworks = await getTowns();
  return { artworks };
};

export default function OverviewPage() {
  const { artworks } = useLoaderData();
  console.log(artworks);

  return (
    <div className="artworks-container">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="artwork-card">
          <Link to={`/artwork/${artwork.id}`}>
            <TownCard town={artwork} />
          </Link>
        </div>
      ))}
    </div>
  );
}

OverviewPage.loader = loader;
