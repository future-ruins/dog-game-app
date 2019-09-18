const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "FETCH_DOG_BREEDS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
