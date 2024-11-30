import React, { useEffect, useState } from "react";
import { Battery } from "lucide-react";
import "./BatteryIndicator.css";

const BatteryIndicator = () => {
  const [batteryLevel, setBatteryLevel] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel((prev) => Math.max(0, prev - 1));
    }, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="menu-item battery-indicator">
      <Battery className="icon" />
      <span>{batteryLevel}%</span>
    </div>
  );
};

export default BatteryIndicator;
