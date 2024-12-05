import React, { useRef } from "react";
import "./Desktop.css";
import Dock from "../Dock/Dock";
import Menubar from "../Menubar/Menubar";

const Desktop = () => {
  const appParentRef = useRef(null);

  return (
    <div className="desktop finder-container" ref={appParentRef}>
      <Menubar />
      <Dock />
    </div>
  );
};

export default Desktop;
