import React, { useState } from "react";
import "./Dock.css";
import AppIcon from "./AppIcon/AppIcon";
import finderIcon from "../../assets/images/appicons/finder.png";
import parodyPressIcon from "../../assets/images/appicons/parodypress.png";
import emojizeIcon from "../../assets/images/appicons/emojize.png";
import chessbroIcon from "../../assets/images/appicons/chessbro.png";
import focusquackIcon from "../../assets/images/appicons/focusquack.png";
const Dock = () => {
  const [dockIcons, setDockIcons] = useState([
    {
      name: "Finder",
      icon: finderIcon,
    },
    { name: "ChessBro", icon: chessbroIcon },
    { name: "ParodyPress", icon: parodyPressIcon },
    { name: "Emojize", icon: emojizeIcon },
    { name: "FocusQuack", icon: focusquackIcon },
  ]);

  return (
    <div className="dock">
      {dockIcons.map((dockIcon) => {
        return <AppIcon name={dockIcon.name} icon={dockIcon.icon} />;
      })}
    </div>
  );
};

export default Dock;
