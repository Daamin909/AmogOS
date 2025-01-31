import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { RefreshCcw } from "lucide-react";
import "./FocusQuack.css";
import {
  handleRefresh,
  handleMinimize,
  handleClose,
  handleDragStop,
  handleMaximize,
} from "./../../../scripts/index";

interface FocusQuackProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const FocusQuack: React.FC<FocusQuackProps> = ({ isVisible, setIsVisible }) => {
  const [url, setURL] = useState<string>("https://focus-quack.daamin.tech");
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 20, y: 20 });
  const FocusQuackRef = useRef<HTMLDivElement>(null);
  const url1 = "https://focus-quack.daamin.tech";
  const url2 = "https://focus-quack.vercel.app";

  useEffect(() => {
    if (isVisible) {
      handleRefresh(setURL, url1, url2);
    }
  }, [isVisible]);

  return (
    isVisible && (
      <Draggable
        handle=".focusquack-header"
        bounds="parent"
        position={position}
        onStop={(e, data) => handleDragStop(e, data, isMaximized, setPosition)}
        disabled={isMaximized}
      >
        <div
          ref={FocusQuackRef}
          className={`focusquack ${isMaximized ? "focusquack--maximized" : ""}`}
          style={{
            width: isMaximized ? "100%" : "800px",
            height: isMaximized ? "100%" : "600px",
          }}
        >
          <div className="focusquack-header">
            <div className="focusquack-window-controls">
              <button
                className="focusquack-control focusquack-control--close"
                onClick={() => handleClose(setIsVisible)}
              ></button>
              <button
                className="focusquack-control focusquack-control--minimize"
                onClick={() => handleMinimize(setIsVisible)}
              ></button>
              <button
                className="focusquack-control focusquack-control--maximize"
                onClick={() =>
                  handleMaximize(setIsMaximized, isMaximized, setPosition)
                }
              ></button>
            </div>
            <div className="focusquack-title">FocusQuack</div>
            <button
              className="focusquack-refresh"
              onClick={() => handleRefresh(setURL, url1, url2)}
            >
              <RefreshCcw />
            </button>
          </div>
          <div className="focusquack-content">
            <iframe
              src={url}
              style={{
                width: "100%",
                height: "calc(100% - 50px)",
                border: "none",
              }}
              title="FocusQuack"
            />
          </div>
        </div>
      </Draggable>
    )
  );
};

export default FocusQuack;
