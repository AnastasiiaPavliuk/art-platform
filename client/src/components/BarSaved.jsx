
import PropTypes from "prop-types";

const BarSaved = ({ width, height, color, windows}) => {



  let windowHeight;
  windowHeight = height / 7;

  return (
    <div
      style={{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <svg width="100" height="250">
        <g className="building">
          <rect
            x={0}
            y={250 - height}
            height={height}
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
                y={250 - height + 10}
                height={windowHeight}
                width={width - 50}
                fill={color}
              />
              <rect
                x={10}
                y={250 - height + windowHeight + height / 5 }
                height={windowHeight}
                width={width - 50}
                fill={color}
              />
            </>
          )}

          <polygon
            points={`0,${250 - height} ${width / 3.5},${230 - height} ${width / 1.5},${230 - height}  ${width},${250 - height}`}
            fill="transparent"
            border={color}
            stroke={color}
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
};

BarSaved.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  windows: PropTypes.bool.isRequired,
};

export default BarSaved;
