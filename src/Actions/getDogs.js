import request from "superagent";
import _ from "lodash";

export const getDogs = () => {
  return (dispatch, getState) => {
    const dogsList = getState().dogsList;
    if (dogsList !== null) return;
    request.get("https://dog.ceo/api/breeds/list/all").then(response => {
      dispatch({
        type: "SET_DOGS_LIST",
        payload: Object.keys(response.body.message)
      });
    });
  };
};

export const getImages = () => {
  return (dispatch, getState) => {
    const dogImages = getState().imagesReducer;
    if (dogImages !== null) return;
    request
      .get("https://dog.ceo/api/breed/hound/images/random/10")
      .then(response => {
        dispatch({
          type: "SET_DOGS_IMAGES",
          payload: response.body.message
        });
      });
  };
};

export const getRandomDog = () => {
  return (dispatch, getState) => {
    const randomDog = _.sample(getState().dogsList);
    request
      .get(`https://dog.ceo/api/breed/${randomDog}/images/random`)
      .then(response => {
        dispatch({
          type: "SET_RANDOM_IMAGE_URL",
          payload: response.body.message
        });
      });
  };
};

// // 'Normal' action creators
// export function giveAnswer(answer) {
//   return {
//     type: "GIVE_ANSWER",
//     payload: answer
//   };
// }
