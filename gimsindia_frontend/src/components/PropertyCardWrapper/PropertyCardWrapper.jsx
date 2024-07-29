import PropTypes from "prop-types";
import React from "react";
import "./property-card-wrapper.css";

export const PropertyCardWrapper = ({ property1, className }) => {
  return (
    <div className={`property-card-wrapper ${className}`}>
      <div className="overlap-group-2">
        <div className="hybrid-servo-stepper-wrapper">
          <p className="hybrid-servo-stepper">
            Hybrid servo stepper in the closed-loop
            <br />
            control system ensures accurate
            <br />
            movement and lower energy
            <br />
            consumption
          </p>
        </div>
        <div className="front-2">
          <div className="high-performance">
            High Performance
            <br />
            motors and drivers
          </div>
          <div className="text-wrapper-5">02</div>
        </div>
      </div>
    </div>
  );
};

PropertyCardWrapper.propTypes = {
  property1: PropTypes.oneOf(["card-1"]),
};
