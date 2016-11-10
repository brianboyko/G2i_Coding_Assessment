// ==========================
// ./reducers/index.js
// ==========================

import { combineReducers } from 'redux';
import * as canary from './canary';

const appReducer = combineReducers(Object.assign({}, canary));

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
