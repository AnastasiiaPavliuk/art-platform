import PropTypes from 'prop-types';
//import TownDetail from '../routes/townDetail';
import TownSmallimage from '../components/TownSmallimage';
import { FaHeart } from "react-icons/fa";

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


export default function TownCard({ town }) {
  return (
    <>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "center"}}
      >
      <div
        style={{ transform: "scale(0.4)", transformOrigin: "center center" }}
      >
        <TownSmallimage town={town} />
      </div>
</div>
      {/* The className "artworks-container" might be needed, ensure it's added if you use it for styling */}
      <div className="flex-card">
        <p>{formatDate(town.createdAt)}</p>
        <div className="like">
          <FaHeart />
        </div>
      </div>

      <div className="flex-card">
        <p className="artwork-author">{town.owner.data.attributes.username}</p>
      </div>
    </>
  );
}

TownCard.propTypes = {
  town: PropTypes.object.isRequired,
};
