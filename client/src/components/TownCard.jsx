import PropTypes from 'prop-types';




export default function TownCard({artworkParameters}) {
  return (
    <div>
      <p>{`Artwork data: ${artworkParameters}`}</p>


      {/* <p>{`Artwork ID: ${artwork.id}`}</p>
      <p>{`Updated At: ${artwork.attributes.updatedAt}`}</p>
      <p>{`Color Code: ${artwork.attributes.artworkData.color}`}</p>
      <div>
        <p>Buildings:</p>
        {artwork.attributes.artworkData.buildings.map((building, index) => (
          <p key={index}>
            {`Building ID: ${building.id}, Height: ${
              building.height
            }, Windows: ${building.windows ? "Yes" : "No"}`}
          </p>
        ))}
      </div> */}
    </div>
  );
}

TownCard.propTypes = {
  artworkParameters: PropTypes.object.isRequired,
};
