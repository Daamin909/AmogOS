import React, { useEffect, useState } from "react";

import "./LoadingScreen.css";

interface LoadingScreenProps {
  setLoaded: (loaded: boolean) => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ setLoaded }) => {
  const [statements, setStatements] = useState<string[]>([]);
  const setup = [
    "Initializing system hard software...",
    "Loading kebab modules...",
    "Turning Cams On...",
    "Initializing obama interfaces...",
    "Starting disligma manager...",
    "Configuring sussy environment...",
    "Loading impostor session...",
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
    }, 550);

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
