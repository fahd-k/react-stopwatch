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
  const [laps, setLaps] = useState([]);
  const [lapDuration, setLapDuration] = useState(0);
  const [lapRecords, setLapRecords] = useState(initialState)

  useEffect(() => {
		if (state.isTimerRunning) {
			const startTime = Date.now() - state.stopWatchTime
			const intervalId = setInterval(() => {
				dispatch({ type: "STOP_TIMER", stopWatchTime: Date.now() - startTime })
			}, 1000 / 16)
			return () => clearInterval(intervalId)
		}
	}, [state.isTimerRunning])

  const runTimer = () => {
    setTimeElapsed(timeElapsed + (Date.now() - state.isTimerRunning))
  }

  //reset values
  const resetStopWatch = () => {
    setTimeElapsed(0)
    setLaps([])
    setLapDuration(0)
    setLapRecords(initialState)
  }

  const lapRunner = () => {
    const newLaps = [...laps]
    newLaps[0].lapTime = timeElapsed - lapDuration
    setLaps(newLaps)
  }

  function handleLap() {
    console.log("laps have been clicked");
    const newLaps = [{ lapNum: (laps.length + 1), lapTime: 0, }, ...laps]

    if(laps.length > 0){
      if (newLaps[1].lapTime > lapRecords.maxLap.lapTime){
        setLapRecords({...lapRecords, maxLap: { lapNum: newLaps[1].lapNum, lapTime: newLaps[1].lapTime}})
      }
      if (newLaps[1].lapTime < lapRecords.minLap.lapTime){
        setLapRecords({...lapRecords, minLap: { lapNum: newLaps[1].lapNum, lapTime: newLaps[1].lapTime}})
    }
  }
  setLapDuration(timeElapsed)
  setLaps(newLaps)
}

  const displayLaps = (lapsArray) => lapsArray.map((lap) => (
    <li
      key={lap.lapNum}
      className={lapsArray.length > 2 ? handleLapClass(lap): ''}
    >
      Lap {lap.lapNum} <span>{formattedTime(lap.lapTime)}</span>
      <hr/>
    </li>
  ))

  const handleLapClass = (currentLap) => {
    if(currentLap.lapNum === lapRecords.maxLap.lapNum){
      return 'max'
    }
    if(currentLap.lapNum === lapRecords.minLap.lapNum){
      return 'min'
    }
    return ''
  }

  const handleLapsDisplay = () => {
    if(laps.length > 0){
      return displayLaps(laps)
    }
  }

  const handleEmptyLapsDisplay = () => {
    if(laps.length < 100){
      return displayLaps(laps)
    }
  }

  const onStartButtonClick = () => {
		dispatch({ type: "START_TIMER" })
	}

	const onLapButtonClick = () => {
		if (state.isTimerRunning) {
			dispatch({ type: "ADD_LAP" })
		} else {
			dispatch({ type: "RESET_TIMER" })
		}
	}

  return (
    <body>
      <p>Made with ❤️ by Fahd</p>
      <Timer stopWatchTime={state.stopWatchTime} />
			<Buttons onLapButtonClick={onLapButtonClick} onStartButtonClick={onStartButtonClick} isTimerRunning={state.isTimerRunning} />
			<Laps
				stopWatchTime={state.stopWatchTime}
				lapItems={state.lapItems}
				fastestLap={state.maxLap}
				slowestLap={state.minLap}
			/>
    </body>
  );
};

export default Stopwatch;
