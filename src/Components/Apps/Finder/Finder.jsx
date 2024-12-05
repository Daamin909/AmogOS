import React, { useState, useRef, useEffect } from "react";
import "./Finder.css";
import Draggable from "react-draggable";
import FileList from "./Tools/FileList";
import Toolbar from "./Tools/Toolbar";
import Preview from "./Tools/Preview";

import ventGIF from "../../../assets/gifs/vent.gif";
import amogusGIF from "../../../assets/gifs/amogus.gif";
import emergencyGIF from "../../../assets/gifs/emergency.gif";
import cowboyGIF from "../../../assets/gifs/gadagadegadagada.gif";
import oneIMG from "../../../assets/images/file_images/amogus.jpg";
import twoIMG from "../../../assets/images/file_images/depressed_impostor.jpg";
import threeIMG from "../../../assets/images/file_images/doeshebite.jpg";
import fourIMG from "../../../assets/images/file_images/gyat.jpg";
import fiveIMG from "../../../assets/images/file_images/homework.jpg";
import sixIMG from "../../../assets/images/file_images/impasta.jpg";
import sevenIMG from "../../../assets/images/file_images/real.jpg";
import eightIMG from "../../../assets/images/file_images/rela_rela.jpg";
import nineIMG from "../../../assets/images/file_images/rickrol.jpg";
import tenIMG from "../../../assets/images/file_images/sus.jpg";
import elevenIMG from "../../../assets/images/file_images/roles.jpg";
import twelveIMG from "../../../assets/images/file_images/homework_2.jpg";
import thirteenIMG from "../../../assets/images/file_images/real_2.jpg";
import fourteenIMG from "../../../assets/images/file_images/chad.jpg";

import oneSnd from "../../../assets/images/file_sound/alert.wav";
import twoSnd from "../../../assets/images/file_sound/not_a_rick_roll.wav";

const Finder = ({ isVisible, setIsVisible, parentRef }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const finderRef = useRef(null);

  const [files, setFiles] = useState([
    {
      name: "amogus.png",
      type: "image",
      image: oneIMG,
    },
    {
      name: "sus.png",
      type: "image",
      image: twoIMG,
    },
    {
      name: "impostors.txt",
      type: "text",
      content: `
  <h2>Impostor Alert</h2>
  <ul>
    <li><b>Red</b>: Seen near Electrical</li>
    <li><b>Cyan</b>: Following others suspiciously</li>
    <li><b>Pink</b>: Faking tasks in Admin</li>
  </ul>
  <p style="color: red;"><em>Watch them closely. Trust no one!</em></p>
`,
    },
    {
      name: "crewmates.png",
      type: "image",
      image: threeIMG,
    },
    {
      name: "tasks.txt",
      type: "text",
      content: `
  <h2>Tasks to Complete</h2>
  <ol>
    <li>Swipe Card in Admin</li>
    <li>Fix Wires in Electrical</li>
    <li>Empty Trash in Storage</li>
    <li>Calibrate Distributor in Reactor</li>
    <li>Prime Shields in Shields Room</li>
  </ol>
  <p style="color: green;"><strong>Complete tasks to secure victory!</strong></p>
`,
    },
    {
      name: "vents.png",
      type: "image",
      image: fourIMG,
    },
    {
      name: "meeting.png",
      type: "image",
      image: fiveIMG,
    },
    {
      name: "sabotage.txt",
      type: "text",
      content: `
  <h2>Sabotage Log</h2>
  <p><strong>Reactor Meltdown:</strong> 3 times</p>
  <p><strong>O2 Depletion:</strong> 2 times</p>
  <p><strong>Comms Disabled:</strong> 1 time</p>
  <p style="color: orange;"><em>Tip:</em> Use sabotage to isolate crewmates and create chaos!</p>
`,
    },
    {
      name: "vent.gif",
      type: "image",
      image: ventGIF,
    },
    {
      name: "wires.png",
      type: "image",
      image: sixIMG,
    },
    {
      name: "reactor.txt",
      type: "text",
      content: `
  <h2>Reactor Report</h2>
  <p><strong>Status:</strong> <span style="color: red;">Critical</span></p>
  <p><strong>Last Inspection:</strong> Failed</p>
  <p><strong>Warning:</strong> Anomalies detected. Manual override required.</p>
`,
    },
    {
      name: "navigation.json",
      type: "text",
      content: `
  <h2>Navigation Data</h2>
  <pre>
{
  "room": "Navigation",
  "tasks": ["Stabilize Steering", "Chart Course"],
  "last_seen": "Cyan",
  "status": "Secure"
}
  </pre>
  <p style="font-family: monospace; color: blue;">JSON data generated for Navigation systems.</p>
`,
    },
    {
      name: "shields.png",
      type: "image",
      image: eightIMG,
    },
    {
      name: "comms.txt",
      type: "text",
      content: `
  <h2>Communications Log</h2>
  <blockquote>
    <p>"<strong>Red</strong> is acting sus!" - Blue</p>
    <p>"I was in Medbay!" - Green</p>
    <p>"It's <strong>Cyan</strong>! Trust me!" - Yellow</p>
  </blockquote>
  <p><strong>Last sabotage:</strong> 00:05:23</p>
`,
    },
    {
      name: "amogus.gif",
      type: "image",
      image: amogusGIF,
    },
    {
      name: "fuel.png",
      type: "image",
      image: nineIMG,
    },
    {
      name: "fix.txt",
      type: "text",
      content: `
  <h2>Repair Report</h2>
  <ul>
    <li><strong>Reactor:</strong> Success</li>
    <li><strong>Oxygen:</strong> Success</li>
    <li><strong>Communications:</strong> Failed</li>
    <li><strong>Lights:</strong> Success</li>
  </ul>
  <p><strong>Current Priority:</strong> Restore Power</p>
`,
    },
    {
      name: "crew_data.bin",
      type: "text",
      content: `
  <h2>Encrypted Crew Data</h2>
  <p><code>01010110 01100101 01101110 01110100 01000001 01101100 01100101 01110010 01110100</code></p>
  <p style="color: red;">Warning: Unauthorized access detected.</p>
`,
    },
    {
      name: "emergency.gif",
      type: "image",
      image: emergencyGIF,
    },
    {
      name: "power_level.txt",
      type: "text",
      content: `
  <h2>Power Levels</h2>
  <ul>
    <li><strong>Reactor:</strong> 75%</li>
    <li><strong>Lights:</strong> 40%</li>
    <li><strong>Shields:</strong> 90%</li>
    <li><strong>Communications:</strong> Offline</li>
  </ul>
  <p style="color: orange;"><strong>Urgent:</strong> Divert power to critical systems.</p>
`,
    },
    {
      name: "scan.png",
      type: "image",
      image: tenIMG,
    },
    {
      name: "sus_log.txt",
      type: "text",
      content: `
  <h2>Suspicion Log</h2>
  <ul>
    <li><strong>01:23:45:</strong> Orange vented in Electrical.</li>
    <li><strong>01:35:12:</strong> Purple standing on a vent in Medbay.</li>
    <li><strong>01:48:00:</strong> Yellow didn't complete tasks.</li>
  </ul>
  <p><em>Note:</em> Always trust your instincts!</p>
`,
    },
    {
      name: "tasklog.txt",
      type: "text",
      content: `
  <h2>Task Log</h2>
  <ul>
    <li>Swipe Card - Yellow</li>
    <li>Fix Wiring - Blue</li>
    <li>Calibrate Distributor - Cyan</li>
  </ul>
  <p style="color: green;">Great progress!</p>
  `,
    },
    {
      name: "impostr.txt",
      type: "text",
      content: `
  <h2>Impostor Hints</h2>
  <ul>
    <li>Red was faking a visual task.</li>
    <li>Orange was seen walking away from a body.</li>
  </ul>
  <p style="color: red;">Stay alert!</p>
  `,
    },
    {
      name: "crewrep.txt",
      type: "text",
      content: `
  <h2>Crewmate Report</h2>
  <p><strong>Status:</strong> 8 crew alive, 2 impostors suspected.</p>
  <p><strong>Current Location:</strong> Electrical, Medbay</p>
  `,
    },
    {
      name: "meeting.txt",
      type: "text",
      content: `
  <h2>Last Meeting</h2>
  <ul>
    <li><b>Red:</b> Claimed they were in Medbay.</li>
    <li><b>Green:</b> Accused Cyan.</li>
    <li><b>Blue:</b> Voted to skip.</li>
  </ul>
  `,
    },
    {
      name: "alerts.txt",
      type: "text",
      content: `
  <h2>Alerts</h2>
  <p><b>Oxygen:</b> Sabotage in progress.</p>
  <p><b>Reactor:</b> Resolved.</p>
  `,
    },
    {
      name: "report.txt",
      type: "text",
      content: `
  <h2>Body Report</h2>
  <p><b>Location:</b> Security</p>
  <p><b>Suspected:</b> Yellow</p>
  `,
    },
    {
      name: "vote.txt",
      type: "text",
      content: `
  <h2>Vote Results</h2>
  <ul>
    <li>Red: 3 votes</li>
    <li>Cyan: 2 votes</li>
    <li>Skipped: 4 votes</li>
  </ul>
  `,
    },
    {
      name: "lights.txt",
      type: "text",
      content: `
  <h2>Lights Panel</h2>
  <p>Restored by: Green</p>
  <p>Sabotaged at: 00:12:34</p>
  `,
    },
    {
      name: "map.txt",
      type: "text",
      content: `
  <h2>Map</h2>
  <p>Navigation, Electrical, Reactor</p>
  <p><b>Current Task:</b> Fix Wiring</p>
  `,
    },
    {
      name: "suspect.txt",
      type: "text",
      content: `
  <h2>Suspects</h2>
  <ul>
    <li><b>Red:</b> Faked task</li>
    <li><b>Yellow:</b> Seen venting</li>
  </ul>
  `,
    },
    {
      name: "sabotge.txt",
      type: "text",
      content: `
  <h2>Sabotage Events</h2>
  <p><b>O2:</b> Resolved at 00:15:45</p>
  <p><b>Reactor:</b> Unresolved</p>
  `,
    },
    {
      name: "victory.txt",
      type: "text",
      content: `
  <h2>Victory</h2>
  <p>Impostors have won the round.</p>
  `,
    },
    {
      name: "tasklst.txt",
      type: "text",
      content: `
  <h2>Task List</h2>
  <ul>
    <li>Download Data</li>
    <li>Empty Trash</li>
  </ul>
  `,
    },
    {
      name: "scan.txt",
      type: "text",
      content: `
  <h2>Medbay Scan</h2>
  <p>Completed by Blue</p>
  `,
    },
    {
      name: "doors.txt",
      type: "text",
      content: `
  <h2>Door Logs</h2>
  <ul>
    <li>Security Door: Opened</li>
    <li>Admin Door: Locked</li>
  </ul>
  `,
    },
    {
      name: "audio.txt",
      type: "text",
      content: `
  <h2>Audio Logs</h2>
  <p>Background Noise Detected.</p>
  `,
    },
    {
      name: "astro.txt",
      type: "text",
      content: `
  <h2>Asteroids</h2>
  <p>Destroyed: 15</p>
  `,
    },
    {
      name: "comms_sabot.txt",
      type: "text",
      content: `
  <h2>Communications</h2>
  <p>Disabled at 00:12:00</p>
  `,
    },
    {
      name: "power.txt",
      type: "text",
      content: `
  <h2>Power Status</h2>
  <ul>
    <li>Reactor: 75%</li>
    <li>Shields: 90%</li>
  </ul>
  `,
    },
    {
      name: "map.json",
      type: "text",
      content: `
  {
    "room": "Medbay",
    "tasks": ["Scan"],
    "status": "Secure"
  }
  `,
    },
    {
      name: "task.json",
      type: "text",
      content: `
  {
    "id": "download",
    "location": "Admin"
  }
  `,
    },
    {
      name: "data.bin",
      type: "text",
      content: `
  <h2>Binary Data</h2>
  <p>10101010</p>
  `,
    },
    {
      name: "alert.wav",
      type: "audio",
      audio: oneSnd,
    },
    {
      name: "listen_to_me.mp3",
      type: "audio",
      audio: twoSnd,
    },
    {
      name: "sus1.png",
      type: "image",
      image: elevenIMG,
    },
    {
      name: "space.png",
      type: "image",
      image: twelveIMG,
    },
    {
      name: "task2.jpg",
      type: "image",
      image: thirteenIMG,
    },
    {
      name: "alien.png",
      type: "image",
      image: fourteenIMG,
    },
    {
      name: "sussycat.png",
      type: "image",
      image: sevenIMG,
    },
    {
      name: "cowboy.gif",
      type: "image",
      image: cowboyGIF,
    },
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " " && selectedFile) {
        e.preventDefault();
        setShowPreview(true);
      }
    };
    const handleKeyUp = (e) => {
      if (e.key === " ") {
        setShowPreview(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [selectedFile]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMinimize = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    if (!isMaximized) {
      setPosition({ x: 0, y: 0 });
    } else {
      setPosition({ x: 20, y: 20 });
    }
  };

  const handleDragStop = (e, data) => {
    if (!isMaximized) {
      setPosition({ x: data.x, y: data.y });
    }
  };

  return (
    isVisible && (
      <Draggable
        handle=".finder__header"
        bounds="parent"
        position={position}
        onStop={handleDragStop}
        disabled={isMaximized}
      >
        <div
          ref={finderRef}
          className={`finder ${isMaximized ? "finder--maximized" : ""}`}
          style={{
            width: isMaximized ? "100%" : "800px",
            height: isMaximized ? "100%" : "600px",
          }}
        >
          <div className="finder__header">
            <div className="finder__window-controls">
              <button
                className="finder__control finder__control--close"
                onClick={handleClose}
              ></button>
              <button
                className="finder__control finder__control--minimize"
                onClick={handleMinimize}
              ></button>
              <button
                className="finder__control finder__control--maximize"
                onClick={handleMaximize}
              ></button>
            </div>
            <div className="finder__title">SussyFinder</div>
          </div>
          <Toolbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="tip">Hold spacebar to preview.</div>
          <div className="finder__content">
            <FileList
              files={files}
              searchTerm={searchTerm}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          </div>
          {showPreview && selectedFile && <Preview file={selectedFile} />}
        </div>
      </Draggable>
    )
  );
};

export default Finder;
