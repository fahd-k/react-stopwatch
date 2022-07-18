import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { formattedTime } from "./Format.js";
import timerReducer from "./Reducer/Reducer.jsx";
import { initialState } from "./Reducer/Reducer.jsx";
import Timer from "./Components/Timer/Timer";
import Buttons from "./Components/Buttons/Buttons";
import Laps from "./Components/Laps/Laps";


const Stopwatch = () => {
  const [state, dispatch] = useReducer(timerReducer, initialState)
  const [timeElapsed, setTimeElapsed] = useState(0)
  // const [laps, setLaps] = useState([]);
  // const [lapDuration, setLapDuration] = useState(0);
  // const [lapRecords, setLapRecords] = useState(initialState)

  //need to refactor using dispatch
  useEffect(() => {
		if (state.isRunning) {
			const startTime = Date.now() - timeElapsed
			const intervalID = setInterval(() => {
        		dispatch({ type: "START_TIMER", timerCount: Date.now() - startTime })				
			}, 60)
			return () => clearInterval(intervalID)
		}
	}, [state.isRunning])


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
      <div className="container">
        <div className="face">
          <div className="stopwatch">
            <Timer timerCount={state.timerCount} />
            <Buttons
              handleLapReset={handleLapReset}
              handleStartStop={handleStartStop}
              isRunning={state.isRunning}
            />
            <Laps
              timerCount={state.timerCount}
              lapRecords={state.lapRecords}
              maxLap={state.maxLap}
              minLap={state.minLap}
            />
          </div>
        </div>
      </div>
    </body>
  );
};

export default Stopwatch;
