import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { RefreshCcw } from "lucide-react";
import "./ParodyPress.css";
import {
  handleRefresh,
  handleMinimize,
  handleClose,
  handleDragStop,
  handleMaximize,
} from "./../../../scripts/index";

const ParodyPress = ({ isVisible, setIsVisible }) => {
  const [url, setURL] = useState("https://parodypress.daamin.tech");
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const url1 = "https://parodypress.daamin.tech";
  const url2 = "https://parody-press.vercel.app";
  const ParodyPressRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      handleRefresh(setURL, url1, url2);
    }
  }, [isVisible]);

  return (
    isVisible && (
      <Draggable
        handle=".parodypress-header"
        bounds="parent"
        position={position}
        onStop={(e, data) => handleDragStop(e, data, isMaximized, setPosition)}
        disabled={isMaximized}
      >
        <div
          ref={ParodyPressRef}
          className={`parodypress ${
            isMaximized ? "parodypress--maximized" : ""
          }`}
          style={{
            width: isMaximized ? "100%" : "900px",
            height: isMaximized ? "100%" : "600px",
          }}
        >
          <div className="parodypress-header">
            <div className="parodypress-window-controls">
              <button
                className="parodypress-control parodypress-control--close"
                onClick={() => handleClose(setIsVisible)}
              ></button>
              <button
                className="parodypress-control parodypress-control--minimize"
                onClick={() => handleMinimize(setIsVisible)}
              ></button>
              <button
                className="parodypress-control parodypress-control--maximize"
                onClick={() =>
                  handleMaximize(setIsMaximized, isMaximized, setPosition)
                }
              ></button>
            </div>
            <div className="parodypress-title">ParodyPress</div>
            <button
              className="parodypress-refresh"
              onClick={() => handleRefresh(setURL, url1, url2)}
            >
              <RefreshCcw />
            </button>
          </div>
          <div className="parodypress-content">
            <iframe
              src={url}
              style={{
                width: "100%",
                height: "calc(100% - 50px)",
                border: "none",
              }}
              title="ParodyPress"
            />
          </div>
        </div>
      </Draggable>
    )
  );
};

export default ParodyPress;
