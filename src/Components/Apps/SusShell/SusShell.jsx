import React, { useState, useEffect, useRef } from "react";
import "./SusShell.css";
import {
  handleClose,
  handleDragStop,
  handleMaximize,
  handleMinimize,
} from "../../../scripts/index";
import Draggable from "react-draggable";
import whenda from "../../../assets/sound/whendaimpostaissus.wav";

const SusShell = ({ isVisible, setIsVisible }) => {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const inputRef = useRef();
  const shellRef = useRef();
  const shellContentRef = useRef();
  const [files] = useState([
    "victory.txt",
    "tasklst.txt",
    "scan.txt",
    "doors.txt",
    "audio.txt",
    "astro.txt",
    "comms_sabot.txt",
    "power.txt",
    "map.json",
    "task.json",
    "data.bin",
    "alert.wav",
    "listen_to_me.mp3",
    "sus1.png",
    "space.png",
    "task2.jpg",
    "alien.png",
    "sussycat.png",
    "cowboy.gif",
  ]);
  useEffect(() => {
    if (shellContentRef.current) {
      shellContentRef.current.scrollTop = shellContentRef.current.scrollHeight;
    }
  }, [output]);
  const commands = {
    help: `Available commands: \nhelp\nls\nclear\nexit\necho\nsecret\ndate\nwhoami\nmkdir\ntips\nplay\npwd\nuptime\ntouch\ncat\nrm\nmv\nchmod\nsussy\nlocate\nsudo`,
    ls: () => files.join("\n"),
    clear: () => {
      "Screen cleared!";
    },
    exit: () => {
      setTimeout(() => {
        setIsVisible(false);
        setOutput([]);
      }, 400);

      return "Exiting SusShell...";
    },
    echo: (args) => args.join(" ") || "Usage: echo [text]",
    secret: () => {
      window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
      return "shushhhh!!";
    },
    date: `Current date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    whoami: "You are a SUSSY IMPOSTOR 🕵️.",
    mkdir: (args) =>
      args.length > 0
        ? `Directory '${args[0]}' created (not really, this is fake).`
        : "Usage: mkdir [directory_name]",
    tips: "Type `help` to see all commands. Explore for surprises!",
    play: () => {
      window.open("https://amongus-online.net/", "_blank");
      return "Enjoy!!!";
    },
    pwd: "/ligma/balls/susShell",
    uptime: "System uptime: 69:69:69 (real).",
    touch: (args) =>
      args.length > 0
        ? `File '${args[0]}' created (fake file).`
        : "Usage: touch [file_name]",
    cat: (args) =>
      args.length > 0 && file.includes(args[0])
        ? `Contents of '${args[0]}': [Redacted by the impostor]`
        : "Usage: cat [file_name] - File not found.",
    rm: (args) =>
      args.length > 0 && file.includes(args[0])
        ? `File '${args[0]}' deleted (pretend).`
        : "Usage: rm [file_name] - File not found.",
    mv: (args) =>
      args.length > 1
        ? `Moved '${args[0]}' to '${args[1]}' (100%).`
        : "Usage: mv [source_file] [destination_file]",
    chmod: (args) =>
      args.length > 1
        ? `Permissions of '${args[1]}' changed to '${args[0]}'.`
        : "Usage: chmod [permissions] [file_name]",
    sussy: () => {
      const sussyAudio = new Audio(whenda);
      sussyAudio.play();
      return "You've been acting kinda sussy lately, ngl.";
    },
    locate: (args) =>
      args.length > 0
        ? `Searching for '${args[0]}'... found (actually not).`
        : "Usage: locate [item]",
    sudo: () =>
      "Error: You're not allowed to do that as a lowly impostor. Only crewmates can sudo!",
  };

  const handleCommand = (command) => {
    const [cmd, ...args] = command.split(" ");
    if (cmd === "clear") {
      setOutput([]);
      return;
    }

    if (commands[cmd]) {
      const response =
        typeof commands[cmd] === "function"
          ? commands[cmd](args)
          : commands[cmd];
      setOutput((prev) => [
        ...prev,
        `<span style="color: #39FF14; font-family: monospace;">root@amogOS:/$ </span>${command}`,
        response,
      ]);
      if (cmd === "exit") {
        setTimeout(() => setIsVisible(false), 1000);
      }
    } else {
      setOutput((prev) => [
        ...prev,
        `<span style="color: #39FF14; font-family: monospace;">root@amogOS:/$ </span>${command}`,
        "Error: Command not recognized. Type `help` for a list of commands.",
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.length == 0) {
        return;
      }
      handleCommand(input.trim());
      setInput("");
    }
  };

  return (
    isVisible && (
      <Draggable
        handle=".shell-header"
        bounds="parent"
        position={position}
        onStop={(e, data) => handleDragStop(e, data, isMaximized, setPosition)}
        disabled={isMaximized}
      >
        <div
          ref={shellRef}
          className={`emojize ${isMaximized ? "emojize--maximized" : ""}`}
          style={{
            width: isMaximized ? "100%" : "680px",
            height: isMaximized ? "100%" : "490px",
          }}
        >
          <div
            className="shell-container"
            onClick={() => inputRef.current.focus()}
          >
            <div className="shell-header">
              <div className="shell-window-controls">
                <button
                  className="shell-control shell-control--close"
                  onClick={() => handleClose(setIsVisible)}
                ></button>
                <button
                  className="shell-control shell-control--minimize"
                  onClick={() => handleMinimize(setIsVisible)}
                ></button>
                <button
                  className="shell-control shell-control--maximize"
                  onClick={() =>
                    handleMaximize(setIsMaximized, isMaximized, setPosition)
                  }
                ></button>
              </div>
              <div className="shell-title">SussyShell</div>
              <div></div>
            </div>
            <div className="shell-body" ref={shellContentRef}>
              {output.map((line, index) => (
                <pre
                  key={index}
                  dangerouslySetInnerHTML={{ __html: line }}
                ></pre>
              ))}
              <div className="shell-input-line">
                <span style={{ color: "#39FF14" }}>root@amogOS:/$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  );
};

export default SusShell;
