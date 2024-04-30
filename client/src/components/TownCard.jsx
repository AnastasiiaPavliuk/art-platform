const import PropTypes from 'prop-types';



export default function TownCard({ town }) {
  return (
    <div>
      <p>{town.color}</p>
       <p>{town.building}</p>
    </div>
  );
}

TownCard.propTypes = {
  town: PropTypes.object.isRequired,
};
