import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [thunk];

const initialStore = {};

const store = createStore(
  rootReducer,
  initialStore,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
