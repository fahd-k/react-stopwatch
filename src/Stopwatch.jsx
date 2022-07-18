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
  // const [timeElapsed, setTimeElapsed] = useState(0)
  // const [laps, setLaps] = useState([]);
  // const [lapDuration, setLapDuration] = useState(0);
  // const [lapRecords, setLapRecords] = useState(initialState)

  useEffect(() => {
		if (state.isRunning) {
			const startTime = Date.now() - state.timerCount
			const intervalID = setInterval(() => {
				dispatch({ type: "START_TIMER", timerCount: Date.now() - startTime })
			}, 1000 / 60)
			return () => clearInterval(intervalID)
		}
	}, [state.isRunning])


  return (
    <body>
      <Timer timerCount={state.timerCount} />
			<Buttons handleLapReset={handleLapReset} handleStartStop={handleStartStop} isRunning={state.isRunning} />
			<Laps
				timerCount={state.timerCount}
				lapRecords={state.lapRecords}
				maxLap={state.maxLap}
				minLap={state.minLap}
			/>
    </body>
  );
};

export default Stopwatch;
