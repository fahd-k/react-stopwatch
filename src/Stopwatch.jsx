import React, { useState, useEffect } from "react";
import "./App.css";
import { formattedTime } from "./Format.js";

const initialLaps = {
  maxLap: {lapNum: 0, lapTime: 0},
  minLap: {lapNum: 0, lapTime: Number.MAX_VALUE}
}

const start = "Start";
const reset = "Reset";
const stop = "Stop";
const lap = "Lap";


const Stopwatch = () => {
  const [time, setTime] = useState(0);
  // const [running, isRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [laps, setLaps] = useState([]);
  const [lapDuration, setLapDuration] = useState(0);
  const [lapRecords, setLapRecords] = useState(initialLaps)

  useEffect(() => {
    if (time) {
      const interval = setInterval(runTimer, 1000 / 60)
      return () => clearInterval(interval)
    }
    // eslint-disable-next-line
  }, [time])

  useEffect(() => {
    if (timeElapsed) {
      lapRunner()
    }
    // eslint-disable-next-line
  }, [timeElapsed])


  const startTimer = () => {
    if (!timeElapsed) {
      handleLap()
    }
    setTime(Date.now())
  };

  const runTimer = () => {
    setTimeElapsed(timeElapsed + (Date.now() - time))
  }

  //reset values
  const resetStopWatch = () => {
    setTimeElapsed(0)
    setLaps([])
    setLapDuration(0)
    setLapRecords(initialLaps)
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

  const handleStartStop = () => time ? setTime(0) : startTimer()
  const handleLapOrReset = time ? handleLap : resetStopWatch
  const lapResetTextHandler = time ? lap : reset;
  const startStopTextHandler = time ? stop : start;
  const startStopButtonClassName = time ? "stopBtn" : "startBtn"


  return (
    <body>
      <p>Made with ❤️ by Fahd</p>
      <div className="container">
        <div className="face">
          <div className="stopwatch">
            <div class="timer-wrapper">
              <h1 class="timer">{formattedTime(timeElapsed)}</h1>
            </div>

            <div class="controls">
              <button
                onClick={handleLapOrReset}
                className={`${lapResetTextHandler}`}
                id="resetBtn"
              >
                {lapResetTextHandler}
              </button>
              <div class="slider"></div>

              <button
                onClick={handleStartStop}
                className={`${startStopButtonClassName}`}
              >
                {startStopTextHandler}
              </button>
            </div>

            <div class="lapsTracker">
              <ul class="laps">
                            <hr></hr>
              <div class="lap-data">
              <span>
              {handleLapsDisplay}
              {handleEmptyLapsDisplay()}
              </span>
              </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Stopwatch;
