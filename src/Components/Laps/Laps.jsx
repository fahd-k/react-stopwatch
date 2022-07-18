import "./Laps.css"

export default function Laps(handleLapsDisplay, handleEmptyLapsDisplay) {

  
  return (
    <body>
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
      </body>
    );

};

