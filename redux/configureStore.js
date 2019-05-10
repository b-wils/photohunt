import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";

import photos from "./photos";

export default function configureStore() {
  const middleware = [];

  if (process.env.NODE_ENV !== "production") {
    middleware.push(require("redux-immutable-state-invariant").default());
  }

  let rootReducer = combineReducers({
    photos: photos
  });

  const store = createStore(
    rootReducer,
    /* preloadedState, */ composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}
