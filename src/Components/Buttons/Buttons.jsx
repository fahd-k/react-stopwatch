import React from "react";
import "./Buttons.css"


export default function Buttons(isRunning, handleStartStop, handleLapReset) {
    
    return (
      <div class="controls">
              <button
                onClick={() => handleLapReset()}
                className='resetBtn'
                id="resetBtn"
              >
                {isRunning ? 'Lap' : 'Reset'}
              </button>

              <div class="slider"></div>

              <button
                onClick={() => handleStartStop()}
                className='startBtn'
              >
                {isRunning ? 'Stop' : 'Start'}
              </button>
            </div>
    );
  }
