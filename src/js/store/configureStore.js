// ==========================
// ./store/configureStore.js
// ==========================

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers/index';

const logger = createLogger();

const enhancer = compose(applyMiddleware(logger));

const configureStore = (initialState) => createStore(rootReducer, initialState, enhancer);

export default configureStore();
