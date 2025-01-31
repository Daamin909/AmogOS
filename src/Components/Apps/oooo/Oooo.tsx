import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { RefreshCcw } from "lucide-react";
import "./Oooo.css";
import {
  handleRefresh,
  handleMinimize,
  handleClose,
  handleMaximize,
  handleDragStop,
} from "./../../../scripts/index";

interface OoooProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Oooo: React.FC<OoooProps> = ({ isVisible, setIsVisible }) => {
  const [url, setURL] = useState<string>("https://oo0oo0o0ooo0.daamin.tech/");
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 20,
    y: 20,
  });
  const url1 = "https://oo0oo0o0ooo0.daamin.tech/";
  const url2 = "https://ooooooo-4s4j.onrender.com/";
  const OoooRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      handleRefresh(setURL, url1, url2);
    }
  }, [isVisible]);

  return (
    isVisible && (
      <Draggable
        handle=".oooo-header"
        bounds="parent"
        position={position}
        onStop={(e, data) => handleDragStop(e, data, isMaximized, setPosition)}
        disabled={isMaximized}
      >
        <div
          ref={OoooRef}
          className={`oooo ${isMaximized ? "oooo--maximized" : ""}`}
          style={{
            width: isMaximized ? "100%" : "800px",
            height: isMaximized ? "100%" : "600px",
          }}
        >
          <div className="oooo-header">
            <div className="oooo-window-controls">
              <button
                className="oooo-control oooo-control--close"
                onClick={() => handleClose(setIsVisible)}
              ></button>
              <button
                className="oooo-control oooo-control--minimize"
                onClick={() => handleMinimize(setIsVisible)}
              ></button>
              <button
                className="oooo-control oooo-control--maximize"
                onClick={() =>
                  handleMaximize(setIsMaximized, isMaximized, setPosition)
                }
              ></button>
            </div>
            <div className="oooo-title">Oooo</div>
            <button
              className="oooo-refresh"
              onClick={() => handleRefresh(setURL, url1, url2)}
            >
              <RefreshCcw />
            </button>
          </div>
          <div className="oooo-content">
            <iframe
              src={url}
              style={{
                width: "100%",
                height: "calc(100% - 50px)",
                border: "none",
              }}
              title="Oooo"
            />
          </div>
        </div>
      </Draggable>
    )
  );
};

export default Oooo;
