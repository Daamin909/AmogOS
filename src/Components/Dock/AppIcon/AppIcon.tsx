import React from "react";
import "./AppIcon.css";

interface AppIconProps {
  name: string;
  icon: string;
  handleClick: () => void;
}

const AppIcon: React.FC<AppIconProps> = ({ name, icon, handleClick }) => {
  return (
    <>
      <div className="dock-app-icon" onClick={handleClick}>
        <img src={icon} alt={`${name} icon`} className="app-dock-icon-image" />
        <text className="text">{name} </text>
      </div>
    </>
  );
};

export default AppIcon;
