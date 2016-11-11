// ==========================
// ./store/configureStore.js
// ==========================

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers/index';

// I like using redux-logger in development to give me an accurate view of my actions and state.
// In production, this should be removed.  I am leaving it in cause I'd like to continue working on this. 
const logger = createLogger();

const enhancer = compose(applyMiddleware(logger));

const configureStore = (initialState) => createStore(rootReducer, initialState, enhancer);

export default configureStore();
