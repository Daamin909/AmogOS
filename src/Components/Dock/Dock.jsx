import React, { useState } from "react";
import "./Dock.css";
import AppIcon from "./AppIcon/AppIcon";
import finderIcon from "../../assets/images/appicons/finder.png";
import parodyPressIcon from "../../assets/images/appicons/parodypress.png";
import emojizeIcon from "../../assets/images/appicons/emojize.png";
import chessbroIcon from "../../assets/images/appicons/chessbro.png";
import focusquackIcon from "../../assets/images/appicons/focusquack.png";
import kaabilbotIcon from "../../assets/images/appicons/kaabilbot.png";
import susshellIcon from "../../assets/images/appicons/susshell.png";
import macrohardedgingIcon from "../../assets/images/appicons/macrohardedging.png";
import ooooIcon from "../../assets/images/appicons/oooo.png";
import Finder from "../Apps/Finder/Finder";
import Emojize from "../Apps/Emojize/Emojize";
import FocusQuack from "../Apps/FocusQuack/FocusQuack";
import SusShell from "../Apps/SusShell/SusShell";
import ChessBro from "./../Apps/ChessBro/ChessBro";
import ParodyPress from "./../Apps/ParodyPress/ParodyPress";
import Oooo from "./../Apps/oooo/Oooo";
import KaabilBot from "./../Apps/KaabilBot/KaabilBot";
import MacrohardEdging from "../Apps/MacrohardEdging/MacrohardEdging";
const Dock = () => {
  const [finderVisible, setFinderVisible] = useState(false);
  const [emojizeVisible, setEmojizeVisible] = useState(false);
  const [susShellVisible, setSusShellVisible] = useState(false);
  const [focusquackVisible, setFocusquackVisible] = useState(false);
  const [chessbroVisible, setChessbroVisible] = useState(false);
  const [parodypressVisible, setParodypressVisible] = useState(false);
  const [ooooVisible, setOoooVisible] = useState(false);
  const [kaabilbotVisible, setKaabilbotVisible] = useState(false);
  const [macrohardEdgingVisible, setMacrohardEdgingVisible] = useState(false);

  const [dockIcons, setDockIcons] = useState([
    {
      name: "SussyFinder",
      icon: finderIcon,
      onClick: () => setFinderVisible((prev) => !prev),
    },
    {
      name: "ChessBro",
      icon: chessbroIcon,
      onClick: () => setChessbroVisible((prev) => !prev),
    },
    {
      name: "ParodyPress",
      icon: parodyPressIcon,
      onClick: () => setParodypressVisible((prev) => !prev),
    },
    {
      name: "oooo",
      icon: ooooIcon,
      onClick: () => setOoooVisible((prev) => !prev),
    },
    {
      name: "Emojize",
      icon: emojizeIcon,
      onClick: () => setEmojizeVisible((prev) => !prev),
    },
    {
      name: "Macrohard Edging",
      icon: macrohardedgingIcon,
      onClick: () => setMacrohardEdgingVisible((prev) => !prev),
    },
    {
      name: "FocusQuack",
      icon: focusquackIcon,
      onClick: () => setFocusquackVisible((prev) => !prev),
    },
    {
      name: "KaabilBot",
      icon: kaabilbotIcon,
      onClick: () => setKaabilbotVisible((prev) => !prev),
    },
    {
      name: "SussyShell",
      icon: susshellIcon,
      onClick: () => setSusShellVisible((prev) => !prev),
    },
  ]);

  return (
    <>
      <div className="dock">
        {dockIcons.map((dockIcon, index) => {
          return (
            <AppIcon
              key={index}
              name={dockIcon.name}
              icon={dockIcon.icon}
              handleClick={dockIcon.onClick}
            />
          );
        })}
      </div>
      <FocusQuack
        isVisible={focusquackVisible}
        setIsVisible={setFocusquackVisible}
      />
      <Finder isVisible={finderVisible} setIsVisible={setFinderVisible} />
      <ParodyPress
        isVisible={parodypressVisible}
        setIsVisible={setParodypressVisible}
      />
      <ChessBro isVisible={chessbroVisible} setIsVisible={setChessbroVisible} />
      <Oooo isVisible={ooooVisible} setIsVisible={setOoooVisible} />
      <Emojize isVisible={emojizeVisible} setIsVisible={setEmojizeVisible} />
      <KaabilBot
        isVisible={kaabilbotVisible}
        setIsVisible={setKaabilbotVisible}
      />
      <MacrohardEdging
        isVisible={macrohardEdgingVisible}
        setIsVisible={setMacrohardEdgingVisible}
      />
      <SusShell isVisible={susShellVisible} setIsVisible={setSusShellVisible} />
    </>
  );
};

export default Dock;
