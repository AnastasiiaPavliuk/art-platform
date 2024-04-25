// import { useState } from "react";
import PropTypes from "prop-types";

const ColorSlider = ({ color, handleSliderChange }) => {

  return (
    <div className="flex-row">
      <label>Color Range</label>
      <input className="color-slider"
        type="range"
        min="160"
        max="210"
        value={color}
        onChange={handleSliderChange}
        style={{ width: '200px' }}
      />
    </div>
  );
};


ColorSlider.propTypes = {
  color: PropTypes.number.isRequired,
  handleSliderChange: PropTypes.func.isRequired
};


export default ColorSlider;
