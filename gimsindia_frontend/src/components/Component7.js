import PropTypes from "prop-types";
import "./Component5.css";
import React, { useState } from "react";

const Component7 = ({ className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`component-27 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="front2">
          <div className="front-child" />
          <div className="div">02</div>
          <div className="handley-teach-pendant">
            <p>High Performance</p>
            <p>Motors and Drivers</p>
          </div>
        </div>
        <div className="back3">
          <div className="back-child" />
          <div className="compact-teach-pendant-container">
            <p>
              Hybrid servo stepper in the closed-loop control system ensures
              accurate movement and lower energy consumption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Component7.propTypes = {
  className: PropTypes.string,
};

export default Component7;
