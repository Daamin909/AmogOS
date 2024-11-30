import React from "react";
import "./Desktop.css";
import Dock from "../Dock/Dock";
import Menubar from "../Menubar/Menubar";
const Desktop = () => {
  return (
    <div className="desktop">
      <Menubar />
      <Dock />
    </div>
  );
};

export default Desktop;
