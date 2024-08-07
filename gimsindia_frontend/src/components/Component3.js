import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Component5.css";

const Component3 = ({ className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`component-27 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="front2">
          <div className="front-child" />
          <div className="div">06</div>
          <div className="handley-teach-pendant">
            <p>Stainless Steel</p>
            <p>Catcher Tank</p>
          </div>
        </div>
        <div className="back3">
          <div className="back-child" />
          <div className="compact-teach-pendant-container">
            <p>
              Stainless steel catcher tank offers a strong build, effortless
              maintenance, and a 100-liter capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Component3.propTypes = {
  className: PropTypes.string,
};

export default Component3;
