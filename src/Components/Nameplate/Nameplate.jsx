import React, { useState, useEffect } from "react";
import "./Nameplate.css";

const Nameplate = ({isVisible, setIsVisible}) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="amogos-loading slide-in">
      <div className="amogos-content">
        <div className="crewmate left"></div>
        <div className="loading-text">
          <h1>AmogOS</h1>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <button onClick={() => setIsVisible(false)} className="begin">
            BOOT
          </button>
        </div>
        <div className="crewmate right"></div>
      </div>
    </div>
  );
};

export default Nameplate;
