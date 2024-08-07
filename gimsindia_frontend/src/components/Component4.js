import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Component5.css";

const Component4 = ({ className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`component-27 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="front2">
          <div className="front-child" />
          <div className="div">05</div>
          <div className="handley-teach-pendant">
            <p>Tungsten Carbide</p>
            <p>Nozzle</p>
          </div>
        </div>
        <div className="back3">
          <div className="back-child" />
          <div className="compact-teach-pendant-container">
            <p>
              High-strength tungsten carbide nozzle ensures a long lifespan and
              is easy to replace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Component4.propTypes = {
  className: PropTypes.string,
};

export default Component4;
