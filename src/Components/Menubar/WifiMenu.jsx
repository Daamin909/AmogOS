import React, { useState } from "react";
import { Wifi } from "lucide-react";

const WifiMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-item wifi-menu" onClick={() => setIsOpen(!isOpen)}>
      <Wifi className="icon" />
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            Connected to Sus
            <div className="signal-strength">Signal strength: Excellent</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WifiMenu;
