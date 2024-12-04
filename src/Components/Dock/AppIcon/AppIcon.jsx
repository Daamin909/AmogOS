import React from "react";
import "./AppIcon.css";
const AppIcon = ({ name, icon, handleClick }) => {
  return (
    <div className="dock-app-icon" onClick={handleClick}>
      <img src={icon} alt={`${name} icon`} className="app-dock-icon-image" />
    </div>
  );
};

export default AppIcon;
