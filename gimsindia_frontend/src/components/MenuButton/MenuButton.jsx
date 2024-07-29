import React from "react";
import "./menu-button.css";

export const MenuButton = ({ className }) => {
  return (
    <div className={`menu-button ${className}`}>
      <div className="element">
        <div className="component">
          <div className="text-wrapper">Home</div>
        </div>
        <div className="div">
          <div className="text-wrapper-2">Menu</div>
        </div>
        <div className="component-2">
          <div className="text-wrapper-2">Contact</div>
        </div>
        <div className="component-2">
          <div className="text-wrapper-2">About us</div>
        </div>
      </div>
    </div>
  );
};
