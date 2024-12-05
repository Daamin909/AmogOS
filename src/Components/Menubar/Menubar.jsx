import React from "react";

import "./MenuBar.css";
import AmongusAppleLogo from "./AmongusAppleLogo";
import AppMenu from "./AppMenu";
import WifiMenu from "./WifiMenu";
import ControlCenter from "./ControlCenter";
import Clock from "./Clock";

export default function MenuBar() {
  return (
    <div className="menubar">
      <AmongusAppleLogo />
      <AppMenu />
      <div className="menubar-right">
        <WifiMenu />
        <Clock />
        <ControlCenter />
      </div>
    </div>
  );
}
