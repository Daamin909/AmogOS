import React, { useState } from "react";

import "./MenuBar.css";
import AmongusAppleLogo from "./AmongusAppleLogo/AmongusAppleLogo";
import AppMenu from "./AppMenu/AppMenu";
import BatteryIndicator from "./BatteryIndicator/BatteryIndicator";
import WifiMenu from "./WifiMenu/WifiMenu";
import Volume from "./Volume/Volume";
import ControlCenter from "./ControlCenter/ControlCenter";
import Clock from "./Clock/Clock";

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
