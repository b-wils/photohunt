// import Immutable, {Map} from 'immutable';
import photoMap from "@assets/photos";

const SET_USER_PHOTO = "photohunt/SET_USER_PHOTO";

var initialState = photoMap;

function photos(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PHOTO:
      let { photoId, photoData } = action;
      let oldPhoto = state[photoId];

      let newState = { ...state };

      newState[photoId] = { ...oldPhoto, userPhoto: photoData };

      return newState;
      break;
    default:
      return state;
  }
}

// Action creators

export function setUserPhoto(photoData, photoId) {
  return {
    type: SET_USER_PHOTO,
    photoData,
    photoId
  };
}

// Selectors
export const getPhotoList = state => {
  return Object.values(state.photos);
};

export const getCurrentPhotoFromNav = (state, props) => {
  return state.photos[props.navigation.getParam("photoid", "NO-ID")];
};

export default photos;
