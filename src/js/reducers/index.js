// ==========================
// ./reducers/index.js
// ==========================

import { combineReducers } from 'redux';
import * as canary from './canary';
import * as todos from './todos';

const appReducer = combineReducers(Object.assign({}, canary, todos));

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
