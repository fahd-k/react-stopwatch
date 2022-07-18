import React from "react";
import "./Timer.css"
import { formattedTime } from "../../Format";


export default function Timer(timerCount) {
    return (
    <body>
      <div class="timer-wrapper">
        <h1 class="timer">{formattedTime(timeElapsed)}</h1>
      </div>
      </body>
    );
  }

  

  