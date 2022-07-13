import React from "react";
import "./ControlButtons.css";

export default function Buttons(props) {
    const StartButton = (
      <div className="startBtn"
           onClick={props.handleStart}>
        Start
      </div>
    );

    const ActiveButtons = (
      <div className="resetBtn">
        <div className="resetBtn" 
             onClick={props.handleReset}>
          Reset
        </div>
        <div className="startBtn" 
             onClick={props.handlePauseResume}>
          {props.isPaused ? "Start" : "Stop"}
        </div>
      </div>
    );
    
    return (
      <div className="Buttons">
        <div>{props.active ? ActiveButtons : StartButton}</div>
      </div>
    );
  }

//   <div class="controls">
//             <div class="toggle">
//               <button class="resetBtn" onClick={() => setTime(0)}>{!running ? "Lap" : "Reset"}</button>
//               {/* <button class="resetBtn" onClick={() => setTime(0)}>Reset</button> */}
//               <button class="lapBtn">Lap</button>
//             </div>
//             <div class="slider"></div>
//             <div class="toggle">
//               <button class="startBtn" onClick={toggleStart}>{!running ? "Start" : "Stop"}</button>
//               {/* <button class="startBtn" onClick={() => isRunning(true)}>Start</button> */}
//               <button class="stopBtn" onClick={() => isRunning(false)}>Pause</button>
//             </div>
//           </div>