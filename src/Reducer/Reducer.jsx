export const initialState = {
    isRunning: false,
    timerCount: 0,
    lapRecords: [],
    maxLap: {lapNum: 0, lapTime: 0},
    minLap: {lapNum: 0, lapTime: Number.MAX_VALUE}
  }

  //add UPDATE_TIMER case
  export default function timerReducer(state, action) {
    switch (action.type) {
        case "START_TIMER":
            return { 
                ...state, 
                isRunning: true,
            };
        case "STOP_TIMER":
            return { 
                ...state, 
                timerCount: false, 
            };
        // case "ADD_LAP":
        //     return {
        //         lapNum: state.lapRecords.length + 1,
        //         lapTime: state.timerCount - state.lapRecords.reduce((lap, index) => lap + index.isRunning, 0),
        //     };
        case "RESET_TIMER":
            return initialState;
        default:
    }
  };