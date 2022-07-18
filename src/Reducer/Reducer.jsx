export const initialState = {
    isRunning: false,
    timerCount: 0,
    lapRecords: [],
    maxLap: {lapNum: 0, lapTime: 0},
    minLap: {lapNum: 0, lapTime: Number.MAX_VALUE},
    payload: any
  }

  export default function timerReducer(state, action) {
    switch (action.type) {
      case "START_TIMER":
        return { 
            ...state, 
            isRunning: !state.isRunning 
        };
      case "STOP_TIMER":
          return { 
            ...state, 
            timerCount: timerCount 
        };
      case "ADD_LAP":
        let newLap = {
            lapNumber: state.lapRecords.length + 1,
            time: state.timerCount - state.lapRecords.reduce((accumulator, lap) => accumulator + lap.isRunning, 0),
          };
          return {
            ...state,
              lapRecords: [newLap, ...state.lapRecords],
              maxLap: newLap.time < state.maxLap?.time ? newLap : state.maxLap,
              minLap: newLap.time > state.minLap.time ? newLap : state.minLap,
          };
        case "RESET_TIMER":
          return initialState
  
        default:
    }
  };