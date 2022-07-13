import React, { useState } from "react";
import "./App.css";
import Timer from "../Timer/Timer";
import Buttons from "../Buttons/Buttons";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, isRunning] = useState(false);
  
    useEffect(() => {    
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);                    
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
  
    }, [running]);
  
    const toggleStart = () => {
      isRunning(!running);
    };

    return (
        <div className="stopwatch">
          <Timer time={time} />
          <Buttons
            active={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
          />
        </div>
      );

};

export default Stopwatch;
