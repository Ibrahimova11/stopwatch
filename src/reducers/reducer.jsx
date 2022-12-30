const reducer = (state, action) => {
  switch (action.type) {
    case "SET_START":
      return {
        startBtn: true,
        stopBtn: false,
        resetBtn: false,
        totalTime: state.totalTime++,
      };
    case "SET_STOP":
      return {
        startBtn: false,
        stopBtn: true,
        resetBtn: false,
        totalTime: state.totalTime,
      };
    case "SET_RESET":
      return {
        startBtn: false,
        stopBtn: false,
        resetBtn: true,
        totalTime: 0,
      };
    default:
      return state;
  }
};

export default reducer;