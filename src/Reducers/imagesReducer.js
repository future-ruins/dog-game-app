const imagesReducer = (state = null, action = {}) => {
  switch (action.type) {
    case "SET_DOGS_IMAGES":
      return [...action.payload];
    default:
      return state;
  }
};

export default imagesReducer;
