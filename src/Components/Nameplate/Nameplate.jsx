import React, { useEffect, useRef } from "react";
import startAudioFile from "../../assets/sound/entry.mp3";
import "./Nameplate.css";

const Nameplate = ({ isVisible, setIsVisible }) => {
  if (!isVisible) {
    return null;
  }
  var timePassed = false;
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        timePassed = true;
      }, 3000);
    }
  }, []);
  return (
    <div className="amogos-loading slide-in">
      <div className="amogos-content">
        <div className="crewmate left"></div>
        <div className="loading-text">
          <h1>AMOGOS</h1>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <button
            onClick={() => {
              if (timePassed) {
                const startAudio = new Audio(startAudioFile);
                startAudio.play();
                if (document.documentElement.requestFullscreen) {
                  document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                  document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                  document.documentElement.msRequestFullscreen();
                }
                setIsVisible(false);
              }
            }}
            className="begin"
          >
            BOOT
          </button>
        </div>
        <div className="crewmate right"></div>
      </div>
    </div>
  );
};

export default Nameplate;
