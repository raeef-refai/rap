import axios from 'axios';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './root-reducer';
import clientMiddleware from './client-middleware';

const middlewares = [clientMiddleware(axios), thunk];

let composeEnhancers;

if (process.env.NODE_ENV === 'production') {
  composeEnhancers = compose;
} else {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const history = syncHistoryWithStore(createHistory(), store);

export default store;
