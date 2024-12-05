import React, { useState } from "react";

import "./OS.css";
import LoadingScreen from "./../LoadingScreen/LoadingScreen";
import Nameplate from "./../Nameplate/Nameplate";
import Desktop from "../Desktop/Desktop";
import Background from "./../Background/Background";
const OS = () => {
  const [loaded, setLoaded] = useState(false);
  const [nameplateVisible, setNameplateVisible] = useState(true);
  return (
    <div className="OS">
      <div className="preflight">
        {!loaded && <LoadingScreen setLoaded={setLoaded} />}
        {loaded && (
          <Nameplate
            isVisible={nameplateVisible}
            setIsVisible={setNameplateVisible}
          />
        )}
      </div>
      {!nameplateVisible && (
        <main className="main">
          <Background />
          <Desktop />
        </main>
      )}
    </div>
  );
};

export default OS;
