import React, { useState } from "react";
 import PropTypes from "prop-types";

const IncrementButton = ({height}) => {


  return (
      <button onClick={IncrementButton} >{height}</button>

  );
};

IncrementButton.propTypes = {
  height: PropTypes.number.isRequired
};

export default IncrementButton;
