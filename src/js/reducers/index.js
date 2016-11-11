// ==========================
// ./reducers/index.js
// ==========================

import { combineReducers } from 'redux';
import * as todos from './todos';

const appReducer = combineReducers(Object.assign({}, todos));
// combine reducers returns a function which takes parameters "state" and "action"
// root reducer takes the current state and the next action to dispatch, passes it through
// the app reducer (of all the combined reducers) and provides the next state. 

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
