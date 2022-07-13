import React from "react";

export default function Timer(props) {
    return (
        <div class="container">
        <div class="face">
          <div class="stopwatch">
            <div class="timer-wrapper">
              <h1 class="timer">
              <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
              <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>       
              </h1>
            </div>
        </div>
    </div>
</div>
    );
  }