import React from "react";
import "./Buttons.css"


export default function Buttons(handleStartStop, handleLapReset, isTimerRunning) {

  const handleStartStop = () => {
		dispatch({ type: "START_TIMER" })
	}

	const handleLapReset = () => {
		if (state.isTimerRunning) {
			dispatch({ type: "ADD_LAP" })
		} else {
			dispatch({ type: "RESET_TIMER" })
		}
	}
    
    return (
      <body>
      <div class="controls">
              <button
                onClick={() => handleLapReset()}
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
