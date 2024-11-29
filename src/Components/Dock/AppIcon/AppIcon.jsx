import React from "react";
import "./AppIcon.css";
const AppIcon = ({ name, icon }) => {
  return (
    <div className="dock-app-icon">
      <img src={icon} alt={`${name} icon`} className="app-dock-icon-image" />
    </div>
  );
};

export default AppIcon;
