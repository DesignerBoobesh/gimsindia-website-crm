import Component12 from "./Component12";
import Component11 from "./Component11";
import Component10 from "./Component10";
import Component9 from "./Component9";
import PropTypes from "prop-types";
import "./MenuButton.css";

const MenuButton = ({ className = "" }) => {
  return (
    <div className={`menu-button ${className}`}>
      <div className="menu-dropdown">
        <div className="dropdown-background" />
      </div>
      <nav className="menu-options">
        <Component12 />
        <Component11 />
        <Component10 />
        <Component9 />
      </nav>
    </div>
  );
};

MenuButton.propTypes = {
  className: PropTypes.string,
};

export default MenuButton;
