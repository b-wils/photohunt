// import Immutable, {Map} from 'immutable';

var initialState = [];

for (var i=0; i<10; i++) {
	initialState.push({
		id: i,
		title: 'hello world!'
	})
}

function photos(state = initialState, action) {

  switch (action.type) {
    default:
      return state
  }
}

export default photos