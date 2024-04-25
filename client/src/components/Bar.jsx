import { useState } from "react";
import PropTypes from "prop-types";
import Controller from "./Controller";

const Bar = ({ barId_key, width, height, color, windows, onDelete }) => {
  const [isControllerVisible, setControllerVisible] = useState(false);
  const [heightUpd, setCurrentHeight] = useState(height);
  const barId = barId_key;

  const incrementHeight = () => {
    setCurrentHeight(prevHeight => prevHeight + 20);
  };

  const decrementHeight = () => {
    setCurrentHeight(prevHeight => prevHeight - 20);
  };

  const toggleControllerVisibility = () => {
    setControllerVisible(prevState => !prevState);


  };

  let windowHeight;
  windowHeight = heightUpd / 7;

  return (
    <div
      style={{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <svg width="100" height="250">
        <g onClick={toggleControllerVisibility} className="building">
          <rect
            x={0}
            y={250 - heightUpd}
            height={heightUpd}
            width={width}
            fill="transparent"
            border={color}
            stroke={color}
            strokeWidth="4"
          />

          {windows && (
            <>
              <rect
                x={10}
                y={250 - heightUpd + 10}
                height={windowHeight}
                width={width - 50}
                fill={color}
              />
              <rect
                x={10}
                y={250 - heightUpd + windowHeight + heightUpd / 5 }
                height={windowHeight}
                width={width - 50}
                fill={color}
              />
            </>
          )}

          <polygon
            points={`0,${250 - heightUpd} ${width / 3.5},${230 - heightUpd} ${width / 1.5},${230 - heightUpd}  ${width},${250 - heightUpd}`}
            fill="transparent"
            border={color}
            stroke={color}
            strokeWidth="3"
          />
        </g>
      </svg>

      {isControllerVisible && <Controller height={heightUpd} barId={barId} onIncrement={incrementHeight} onDecrement={decrementHeight} onDelete={onDelete} onHideControls={toggleControllerVisibility}/>}
    </div>
  );
};

Bar.propTypes = {
  barId_key: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  windows: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Bar;
