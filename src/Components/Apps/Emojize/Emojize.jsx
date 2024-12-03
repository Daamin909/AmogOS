import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { RefreshCcw } from "lucide-react";
import "./Emojize.css";
import {
  handleRefresh,
  handleMinimize,
  handleClose,
  handleDragStop,
  handleMaximize,
} from "./../../../scripts/index";

const Emojize = ({ isVisible, setIsVisible }) => {
  const [url, setURL] = useState("https://emojize.daamin.tech");
  const url1 = "https://emojize.daamin.tech";
  const url2 = "https://emojize-neon.vercel.app";
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const emojizeRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      handleRefresh(setURL, url1, url2);
    }
  }, [isVisible]);

  return (
    isVisible && (
      <Draggable
        handle=".emojize-header"
        bounds="parent"
        position={position}
        onStop={(e, data) => handleDragStop(e, data, isMaximized, setPosition)}
        disabled={isMaximized}
      >
        <div
          ref={emojizeRef}
          className={`emojize ${isMaximized ? "emojize--maximized" : ""}`}
          style={{
            width: isMaximized ? "100%" : "800px",
            height: isMaximized ? "100%" : "600px",
          }}
        >
          <div className="emojize-header">
            <div className="emojize-window-controls">
              <button
                className="emojize-control emojize-control--close"
                onClick={() => handleClose(setIsVisible)}
              ></button>
              <button
                className="emojize-control emojize-control--minimize"
                onClick={() => handleMinimize(setIsVisible)}
              ></button>
              <button
                className="emojize-control emojize-control--maximize"
                onClick={() =>
                  handleMaximize(setIsMaximized, isMaximized, setPosition)
                }
              ></button>
            </div>
            <div className="emojize-title">Emojize</div>
            <button
              className="emojize-refresh"
              onClick={() => handleRefresh(setURL, url1, url2)}
            >
              <RefreshCcw />
            </button>
          </div>
          <div className="emojize-content">
            <iframe
              src={url}
              style={{
                width: "100%",
                height: "calc(100% - 50px)",
                border: "none",
              }}
              title="Emojize"
            />
          </div>
        </div>
      </Draggable>
    )
  );
};

export default Emojize;
