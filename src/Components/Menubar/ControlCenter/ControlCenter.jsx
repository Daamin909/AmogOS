import React, { useState } from "react";
import { LayoutGrid } from "lucide-react";
import "./ControlCenter.css";

const ControlCenter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="menu-item control-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <LayoutGrid className="icon" />
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">Wi-Fi & Network</div>
          <div className="dropdown-item">Bluetooth</div>
        </div>
      )}
    </div>
  );
};

export default ControlCenter;
