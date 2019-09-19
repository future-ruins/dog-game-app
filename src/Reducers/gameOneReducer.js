const gameOneReducer = (state = null, action = {}) => {
  switch (action.type) {
    case "SET_RANDOM_IMAGE_URL":
      return {...action.payload};
    default:
      return state;
  }
};

export default gameOneReducer;
