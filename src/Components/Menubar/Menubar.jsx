import React, { useState } from "react";

import "./MenuBar.css";
import AmongusAppleLogo from "./AmongusAppleLogo";
import AppMenu from "./AppMenu";
import BatteryIndicator from "./BatteryIndicator";
import WifiMenu from "./WifiMenu";
import Volume from "./Volume";
import ControlCenter from "./ControlCenter";
import Clock from "./Clock";

export default function MenuBar() {
  const [currentApp, setCurrentApp] = useState("Safari");

  return (
    <div className="menubar">
      <AmongusAppleLogo />
      <AppMenu currentApp={currentApp} />
      <div className="menubar-right">
        <WifiMenu />
        <Volume />
        <BatteryIndicator />
        <Clock />
        <ControlCenter />
      </div>
    </div>
  );
}
