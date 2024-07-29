import PropTypes from "prop-types";
import React from "react";
import "./card-5.css";

export const Card5 = ({ property1, className }) => {
  return (
    <div className={`card-5 ${className}`}>
      <div className="overlap-group-5">
        <div className="high-strength-wrapper">
          <p className="high-strength">
            High-strength tungsten carbide nozzle
            <br />
            ensures a long lifespan and is easy
            <br />
            to replace.
          </p>
        </div>
        <div className="front-5">
          <div className="text-wrapper-9">05</div>
          <div className="tungsten-carbide">
            Tungsten carbide
            <br />
            Nozzle
          </div>
        </div>
      </div>
    </div>
  );
};

Card5.propTypes = {
  property1: PropTypes.oneOf(["card-1"]),
};
