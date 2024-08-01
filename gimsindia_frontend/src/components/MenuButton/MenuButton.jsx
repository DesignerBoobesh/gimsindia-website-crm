import React, {useState} from "react";
import "./menu-button.css";

export const MenuButton = ({ className }) => {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <div className={`menu-button ${className}`}>
      <div className="element">

        <div className={`component ${selectedMenu === 'Home' ? 'active' : ''}`} onClick={() => handleMenuClick('Home')}>
          <div className="text-wrapper-2">Home</div>
        </div>
        <div className={`div ${selectedMenu === 'Menu' ? 'active' : ''}`} onClick={() => handleMenuClick('Menu')}>
          <div className="text-wrapper-2">Menu</div>
        </div>
        <div className={`component-2 ${selectedMenu === 'Contact' ? 'active' : ''}`} onClick={() => handleMenuClick('Contact')}>
          <div className="text-wrapper-2">Contact</div>
        </div>
        <div className={`component-2 ${selectedMenu === 'About us' ? 'active' : ''}`} onClick={() => handleMenuClick('About us')}>
          <div className="text-wrapper-2">About us</div>
        </div>
      </div>
    </div>
  );
};
