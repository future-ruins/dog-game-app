import request from "superagent";
import _ from "lodash";

export const getDogs = () => {
  return (dispatch, getState) => {
    const dogsList = getState().dogsList;
    // console.log('dogList state', dogsList)
    if (dogsList !== null) return;
    request.get("https://dog.ceo/api/breeds/list/all").then(response => {
      dispatch({
        type: "SET_DOGS_LIST",
        payload: Object.keys(response.body.message)
      });
    });
  };
};

export const getImages = (breed) => {
  // const breed = this.props.match.params.breed is only availble in comp rendered by route and not in getDogs.js
  // to get that value, i made a a parameter for getImages, and inside your compo, i have put this.prop.match.params as an argument in the function call. 
  console.log('match params:', breed)
  return (dispatch, getState) => {
    // const dogImages = getState().imagesReducer;
    // console.log('dogList state', dogImages)
    //  if (dogImages !== null) return; // doesn't make sense, because you want to override the state
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/10`)
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
        console.log('response for get images', response)
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
