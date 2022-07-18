import React from "react";
import "./Buttons.css"


export default function Buttons(handleLapOrReset, handleStartStop, isTimerRunning) {
    
    return (
      <body>
      <div class="controls">
              <button
                onClick={() => handleLapOrReset()}
                className='resetBtn'
                id="resetBtn"
              >
                {isTimerRunning ? 'Lap' : 'Reset'}
              </button>

              <div class="slider"></div>

              <button
                onClick={() => handleStartStop()}
                className='startBtn'
              >
                {isTimerRunning ? 'Stop' : 'Start'}
              </button>
            </div>
            </body>
    );
  }
