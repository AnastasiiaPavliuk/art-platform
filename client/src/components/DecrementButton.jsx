import React, { useState } from "react";
// import PropTypes from "prop-types";

const DecrementButton = ({height }) => {

    const handleDecrement = () => {
    setHeight(height => height - 10);
  };

  return (
<button onClick={handleDecrement} disabled={height <= 20}>-</button>

  );
};

// ColorButtons.propTypes = {
//   initialColor: PropTypes.string, // specify the type of initialColor prop
//   onColorChange: PropTypes.func.isRequired // specify the type of onColorChange prop (a required function)
// };

// ColorButtons.defaultProps = {
//   initialColor: "skyblue" // set default value for initialColor prop
// };

export default DecrementButton;
