import PropTypes from "prop-types";

const Controller = ({ barId, height, onIncrement, onDecrement, onDelete, onHideControls}) => {

  // console.log(barId, height, onIncrement, onDecrement);
  return (
    <div className="controller-cont">
      <button onClick={onIncrement} disabled={height > 220}>+</button>
      <button onClick = {onDecrement} disabled={height < 70}>-</button>
      <button onClick={() => onDelete(barId)} > <img className="icon-img" src="../bin-icon.png" alt="delete" /></button>
      <button onClick={onHideControls} style={{border: 'none'}}> <img src="../arrow-up.png" alt="" /></button>
    </div>
  );
}

Controller.propTypes = {
  barId: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onHideControls: PropTypes.func.isRequired
};

export default Controller;
