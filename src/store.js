import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import reducers from './reducers';

const rootReducer = combineReducers({
  ...reducers
});

const middlewares = [
  thunkMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  const logger = loggerMiddleware({
    collapsed: true,
    duration: true,
  });

  middlewares.push(logger);
}

let storeCreator = applyMiddleware.apply(null, middlewares)

if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
  require('set.prototype.tojson');
  require('map.prototype.tojson');

  storeCreator = compose(storeCreator, window.devToolsExtension());
}


export default storeCreator(createStore)(rootReducer);
