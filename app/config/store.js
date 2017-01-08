import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
const thunks = [thunk, logger];

let store = createStore(
    combineReducers(rootReducer),
    applyMiddleware(...thunks)
);

export default store;