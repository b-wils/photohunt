import { createStore, combineReducers } from 'redux';

import photos from './photos'

export default function configureStore() {

	let rootReducer = combineReducers ({
		photos: photos
	})

	const store = createStore(rootReducer)

	return store;
}