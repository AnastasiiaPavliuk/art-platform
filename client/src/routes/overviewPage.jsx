import { Link, useLoaderData } from "react-router-dom";
import { getTowns } from "../services/artwork";
import TownCard from "../components/TownCard";
// import { CiHeart } from "react-icons/ci";

const loader = async () => {
  const artworks = await getTowns();
  return { artworks };
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const daySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day}${daySuffix(day)} of ${months[monthIndex]}, ${year}`;
};

export default function OverviewPage() {
  const { artworks } = useLoaderData();
  console.log(artworks);

  return (
    <div className="artworks-container">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="artwork-card">
          <Link to={`/artwork/${artwork.id}`}>
            <TownCard scaledDown={true} artworkParameters={artwork} />
          </Link>
          {/* <p>{artwork.artworkData}</p> */}

          <div className="flex-card">
            <p>{formatDate(artwork.createdAt)}</p>
            <div className="like">
              {/* <CiHeart/> */}
            </div>
          </div>
          <div className="flex-card">
            <p className="artwork-author">Owner </p>
          </div>
        </div>
      ))}
    </div>
  );
}

OverviewPage.loader = loader;
