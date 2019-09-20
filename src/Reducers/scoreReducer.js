const scoreReducer = (state = 0, action = {}) => {
    switch (action.type) {
      case "COUNT":
        return state + 1
      case "WIN_STREAK":
        return state + 1
      case "RESET_WIN_STREAK":
        return state = 0
      case "SCORE":
        return state + 1
      case "WIN_PERCENT":
        return 0;
      default:
        return state;
    }
  };
  
  export default scoreReducer;
  