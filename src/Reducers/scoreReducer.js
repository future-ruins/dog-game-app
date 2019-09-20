const scoreReducer = (state = scoreBar, action = {}) => {
  switch (action.type) {
    case "COUNT":
      return { ...state, count: action.payload };
    case "STREAK":
      return { ...state, streak: action.payload };
    case "SCORE":
      return { ...state, score: action.payload };
    case "WIN_PERCENT":
      return { ...state, winPercent: (state.score / state.count) * 100 };
    case "LEVEL":
      return { ...state, level: action.payload };
    default:
      return state;
  }
};

export default scoreReducer;

const scoreBar = {
  count: 0,
  score: 0,
  streak: 0,
  winPercent: 0,
  level: 1
};
