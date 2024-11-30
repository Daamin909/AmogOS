import React, { useState } from "react";
import { Volume2 } from "lucide-react";
import "./Volume.css";

const Volume = () => {
  const [volume, setVolume] = useState(50);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="menu-item volume-control"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Volume2 className="icon" />
      {isOpen && (
        <div className="volume-dropdown">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            className="volume-slider"
            onChange={(e) => setVolume(parseInt(e.target.value))}
          />
        </div>
      )}
    </div>
  );
};
export default Volume;
