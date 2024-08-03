import Component12 from "./Component12";
import Component11 from "./Component11";
import Component10 from "./Component10";
import Component9 from "./Component9";
import PropTypes from "prop-types";
import "./MenuButton.css";
import React, {useState} from 'react';


const MenuButton = ({ className = "" }) => {
  const [selected, setSelected] = useState('home');

  const handleSelection = (component) => {
    setSelected(component);
  };
  return (
    <div className={`menu-button ${className}`}>
      <div className="menu-dropdown">
        <div className="dropdown-background" />
      </div>
      <nav className="menu-options">
      <Component12
        className={selected === 'home' ? 'selected' : ''}
        onClick={() => handleSelection('home')}
      />
      <Component11
        className={selected === 'menu' ? 'selected' : ''}
        onClick={() => handleSelection('menu')}
      />
      <Component10
        className={selected === 'contact' ? 'selected' : ''}
        onClick={() => handleSelection('contact')}
      />
        <Component9
        className={selected === 'aboutus' ? 'selected' : ''}
        onClick={() => handleSelection('aboutus')}
      />
      </nav>
    </div>
  );
};

MenuButton.propTypes = {
  className: PropTypes.string,
};

export default MenuButton;
