import React, { useEffect, useState } from "react";
import { Battery } from "lucide-react";

const BatteryIndicator = () => {
  const [batteryPercentage, setBatteryPercentage] = useState(0);

  useEffect(() => {
    const updateBatteryStatus = async () => {
      const battery = await navigator.getBattery();
      setBatteryPercentage(battery.level * 100);
      battery.addEventListener("levelchange", () => {
        setBatteryPercentage(battery.level * 100);
      });
    };
    updateBatteryStatus();
    return () => {
      if (navigator.getBattery) {
        navigator.getBattery().then((battery) => {
          battery.removeEventListener("levelchange", updateBatteryStatus);
        });
      }
    };
  }, []);

  return (
    <div className="menu-item battery-indicator">
      <Battery className="icon" />
    </div>
  );
};

export default BatteryIndicator;
