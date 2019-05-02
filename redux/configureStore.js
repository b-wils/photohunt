import { createStore, combineReducers, applyMiddleware } from 'redux';

import photos from './photos'

export default function configureStore() {

	const middleware = [];

	if (process.env.NODE_ENV !== "production") {
		middleware.push(require("redux-immutable-state-invariant").default());
	}

	let rootReducer = combineReducers ({
		photos: photos
	})

	const store = createStore(rootReducer, applyMiddleware(...middleware))

	return store;
}