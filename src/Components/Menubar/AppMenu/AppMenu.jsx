import React from "react";
import "./AppMenu.css";

const AppMenu = ({ currentApp }) => {
  const menuItems = {
    Safari: ["File", "Edit", "View", "History", "Bookmarks", "Window", "Help"],
    Finder: ["File", "Edit", "View", "Go", "Window", "Help"],
  };

  return (
    <div className="menubar-left">
      {menuItems[currentApp]?.map((item) => (
        <div key={item} className="menu-item">
          {item}
        </div>
      ))}
    </div>
  );
};
export default AppMenu;
