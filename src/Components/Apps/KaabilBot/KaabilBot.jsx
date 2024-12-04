import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { RefreshCcw } from "lucide-react";
import "./KaabilBot.css";
import {
  handleRefresh,
  handleMinimize,
  handleClose,
  handleDragStop,
  handleMaximize,
} from "./../../../scripts/index";

const KaabilBot = ({ isVisible, setIsVisible }) => {
  const [url, setURL] = useState("https://kaabilbot.daamin.tech");
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const KaabilBotRef = useRef(null);
  const url1 = "https://kaabilbot.daamin.tech";
  const url2 = "https://kaabil-bot.vercel.app";
  useEffect(() => {
    if (isVisible) {
      handleRefresh(setURL, url1, url2);
    }
  }, [isVisible]);

  return (
    isVisible && (
      <Draggable
        handle=".kaabilbot-header"
        bounds="parent"
        position={position}
        onStop={(e, data) => handleDragStop(e, data, isMaximized, setPosition)}
        disabled={isMaximized}
      >
        <div
          ref={KaabilBotRef}
          className={`kaabilbot ${isMaximized ? "kaabilbot--maximized" : ""}`}
          style={{
            width: isMaximized ? "100%" : "1280px",
            height: isMaximized ? "100%" : "500px",
          }}
        >
          <div className="kaabilbot-header">
            <div className="kaabilbot-window-controls">
              <button
                className="kaabilbot-control kaabilbot-control--close"
                onClick={() => handleClose(setIsVisible)}
              ></button>
              <button
                className="kaabilbot-control kaabilbot-control--minimize"
                onClick={() => handleMinimize(setIsVisible)}
              ></button>
              <button
                className="kaabilbot-control kaabilbot-control--maximize"
                onClick={() =>
                  handleMaximize(setIsMaximized, isMaximized, setPosition)
                }
              ></button>
            </div>
            <div className="kaabilbot-title">KaabilBot</div>
            <button
              className="kaabilbot-refresh"
              onClick={() => handleRefresh(setURL, url1, url2)}
            >
              <RefreshCcw />
            </button>
          </div>
          <div className="kaabilbot-content">
            <iframe
              src={url}
              style={{
                width: "100%",
                height: "calc(100% - 50px)",
                border: "none",
              }}
              title="KaabilBot"
            />
          </div>
        </div>
      </Draggable>
    )
  );
};

export default KaabilBot;




/*









*/