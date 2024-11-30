import React, { useEffect, useState } from "react";

import "./LoadingScreen.css";

const LoadingScreen = ({ setLoaded }) => {
  const [statements, setStatements] = useState([]);
  const setup = [
    "Initializing system hardware...",
    "Loading kernel modules...",
    "Checking file system integrity...",
    "Starting system daemons...",
    "Mounting local drives...",
    "Initializing network interfaces...",
    "Starting display manager...",
    "Configuring desktop environment...",
    "Loading user session...",
    "Initializing sound system...",
    "Checking for system updates...",
    "Establishing secure connections...",
    "Loading device drivers...",
    "Verifying user credentials...",
    "Synchronizing system clock...",
    "Preparing coffee for the CPU... ☕",
    "Debugging the universe... 🌌",
    "Counting to infinity... Almost there!",
  ];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < setup.length) {
        setStatements((prevStatements) => [...prevStatements, setup[index]]);
        index++;
      } else {
        clearInterval(interval);
        setLoaded(true);
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="animated-loader">
        {statements.map((statement, index) => {
          return <a key={index}>{statement}</a>;
        })}
      </div>
    </div>
  );
};

export default LoadingScreen;
