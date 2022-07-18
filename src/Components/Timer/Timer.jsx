import React from "react";
import "./Timer.css"
import { formattedTime } from "../../Format";


export default function Timer(stopWatchTime) {
    return (
    <body>
      <div class="timer-wrapper">
        <h1 class="timer">{stopWatchTime ? formattedTime(stopWatchTime) : '00:00.00'}</h1>
      </div>
      </body>
    );
  }