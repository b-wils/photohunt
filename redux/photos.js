// import Immutable, {Map} from 'immutable';
import photoMap from '@assets/photos'

var initialState = photoMap;

function photos(state = initialState, action) {

  switch (action.type) {
    default:
      return state
  }
}


export const getPhotoList = (state) => {
	return Object.values(state.photos)
}

export const getCurrentPhotoFromNav = (state, props) => {
	return state.photos[props.navigation.getParam('id', 'NO-ID')]
}

export default photos