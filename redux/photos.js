// import Immutable, {Map} from 'immutable';
import photoMap from '@assets/photos'

var initialState = photoMap;

// for (var i=0; i<16; i++) {
// 	initialState.push({
// 		id: i,
// 		title: 'hello world!'

// 	})
// }

function photos(state = initialState, action) {

  switch (action.type) {
    default:
      return state
  }
}

export default photos