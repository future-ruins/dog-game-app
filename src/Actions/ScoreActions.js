export const addCount = current => {
  return {
    type: "COUNT",
    payload: current + 1
  };
};

export const updateStreak = value => {
  return {
    type: "STREAK",
    payload: value
  };
};

export const addScore = current => {
  return {
    type: "SCORE",
    payload: current
  };
};
export const addWin = current => {
  return {
    type: "WIN_PERCENT"
  };
};

export const addLevel = current => {
  return {
    type: "LEVEL",
    payload: current + 1
  };
};
