import PropTypes from "prop-types";
//import TownDetail from '../routes/townDetail';
import TownSmallimage from "../components/TownSmallimage";
// import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import RenderActionButtons from "./RenderActionButtons";
import { getAuthData } from "../services/auth";



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

// const loader = async () => {
//    // Fetch the current logged-in user data

// };

export default function TownCard({ town, artworkId}) {
    const authData = getAuthData();
    const loggedInUsername = authData && authData.user ? authData.user.username : "Not logged in";
    const ownerUsername = town.owner.data.attributes.username;
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{ transform: "scale(0.4)", transformOrigin: "center center" }}
        >
          <Link to={`/artwork/${artworkId}`}>
          <TownSmallimage town={town} />
          </Link>
        </div>
      </div>
      <div className="flex-card">
        <p>{formatDate(town.createdAt)}</p>
        {/* <div className="like">
          <FaHeart />
        </div> */}
      </div>

      <div className="flex-card">
        <p className="artwork-author">{town.owner.data.attributes.username}</p>
      </div>
      <div className="flex-card">
        <RenderActionButtons artworkId={town.id} loggedInUsername={loggedInUsername} ownerUsername={ownerUsername} />
      </div>
    </>
  );
}

TownCard.propTypes = {
  town: PropTypes.object.isRequired,
  artworkId: PropTypes.number.isRequired,
};

//TownCard.loader = loader;
