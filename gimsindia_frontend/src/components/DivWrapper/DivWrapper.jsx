import PropTypes from "prop-types";
import React from "react";
import "./div-wrapper.css";

export const DivWrapper = ({ property1, className }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className="overlap-group-3">
        <div className="precision-grade-ball-wrapper">
          <p className="precision-grade-ball">
            Precision-grade ball screw provides
            <br />
            excellent positional accuracy,
            <br />
            repeatability, and low backlash
          </p>
        </div>
        <div className="front-3">
          <div className="precision-traverse">
            Precision Traverse
            <br />
            System
          </div>
          <div className="text-wrapper-6">03</div>
        </div>
      </div>
    </div>
  );
};

DivWrapper.propTypes = {
  property1: PropTypes.oneOf(["card-1"]),
};
