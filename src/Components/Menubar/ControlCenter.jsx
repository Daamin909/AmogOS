import React, { useState } from "react";
import { LayoutGrid } from "lucide-react";

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
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            target="_blank"
            className="dropdown-item"
          >
            Audio
          </a>
        </div>
      )}
    </div>
  );
};

export default ControlCenter;
