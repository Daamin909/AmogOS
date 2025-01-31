import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { RefreshCcw } from "lucide-react";
import "./ChessBro.css";
import {
  handleRefresh,
  handleMinimize,
  handleClose,
  handleDragStop,
} from "./../../../scripts/index";

interface ChessBroProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChessBro: React.FC<ChessBroProps> = ({ isVisible, setIsVisible }) => {
  const [url, setURL] = useState<string>("https://chessbro.daamin.tech");
  const url1 = "https://chessbro.daamin.tech";
  const url2 = "https://chess-bro.vercel.app";
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 20,
    y: 20,
  });
  const ChessBroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      handleRefresh(setURL, url1, url2);
    }
  }, [isVisible]);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    if (!isMaximized) {
      setPosition({ x: 0, y: 0 });
    } else {
      setPosition({ x: 20, y: 20 });
    }
    handleRefresh(setURL, url1, url2);
  };

  return (
    isVisible && (
      <Draggable
        handle=".chessbro-header"
        bounds="parent"
        position={position}
        onStop={(e, data) => handleDragStop(e, data, isMaximized, setPosition)}
        disabled={isMaximized}
      >
        <div
          ref={ChessBroRef}
          className={`chessbro ${isMaximized ? "chessbro--maximized" : ""}`}
          style={{
            width: isMaximized ? "100%" : "1100px",
            height: isMaximized ? "100%" : "650px",
          }}
        >
          <div className="chessbro-header">
            <div className="chessbro-window-controls">
              <button
                className="chessbro-control chessbro-control--close"
                onClick={() => handleClose(setIsVisible)}
              ></button>
              <button
                className="chessbro-control chessbro-control--minimize"
                onClick={() => handleMinimize(setIsVisible)}
              ></button>
              <button
                className="chessbro-control chessbro-control--maximize"
                onClick={handleMaximize}
              ></button>
            </div>
            <div className="chessbro-title">ChessBro</div>
            <button
              className="chessbro-refresh"
              onClick={() => handleRefresh(setURL, url1, url2)}
            >
              <RefreshCcw />
            </button>
          </div>
          <div className="chessbro-content">
            <iframe
              src={url}
              style={{
                width: "100%",
                height: "calc(100% - 50px)",
                border: "none",
              }}
              title="ChessBro"
            />
          </div>
        </div>
      </Draggable>
    )
  );
};

export default ChessBro;
