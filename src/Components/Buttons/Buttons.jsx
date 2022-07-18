import React from "react";
import "./Buttons.css"


export default function Buttons(handleStartStop, handleLapReset, isTimerRunning) {

  const handleStartStop = () => {
		dispatch({ type: "START_TIMER" })
	}

	const handleLapReset = () => {
		if (state.isRunning) {
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
            </body>
    );
  }
