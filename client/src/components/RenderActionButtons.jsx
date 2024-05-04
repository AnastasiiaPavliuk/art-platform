import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function  RenderActionButtons ({ loggedInUsername, ownerUsername, artworkId }) {
  if (loggedInUsername === ownerUsername) {
    return (
      <div>
        <Link to={`/artwork/${artworkId}/edit`}>
          <button style={{ fontSize: "16px", padding: "0.5rem 1.5rem" }}>
            Edit
          </button>
        </Link>
        <button style={{ fontSize: "16px", padding: "0.5rem 1.5rem" }}>
          Delete
        </button>
      </div>
    );
  }
  return null;
}

RenderActionButtons.propTypes = {
  loggedInUsername: PropTypes.string.isRequired,
  ownerUsername: PropTypes.string.isRequired,
  artworkId: PropTypes.number.isRequired,
};
