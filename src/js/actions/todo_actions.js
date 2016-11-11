// ==========================
// ./actions/todo_actions.js
// ==========================

// we are importing a standard set of constants, common to the reducer,
// to generate error warnings (when we make typos) that would not occur were we to pass in
// string literals.
import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  SET_FILTER,
  TOGGLE_ALL,
} from '../constants/index';

// actions return an object, which have a property, "type", which will pass through
// the reducers and return the new state.

export const addTodo = (todoString) => {
  // I will be referring to the TODOs by the index
  // in the store.todos array; but one possibility here
  // might be to use Math.random to create a unique hash for each
  // todo, which could then be referred. Were this a more
  // complicated app, I'd be tempted to take that approach.
  return {
    type: ADD_TODO,
    todo: {
      text: todoString,
      completed: false,
    }
  };
};

// We only need the index of the todo to toggle.
export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
});

/**
 * setFilter is slightly more complex,
 * but essentially, we're just determining whether
 * or not to filter, and if so, how.
 * It should be noted that sending "ALL" through this
 * function returns {type: SET_FILTER, filter{on: false}}; 
 */
export const setFilter = (choice) => {
  let filter = {
    on: false
  }
  if (choice === "COMPLETE") {
    filter = {
      on: true,
      complete: true
    }
  }
  if (choice === "ACTIVE") {
    filter = {
      on: true,
      complete: false
    }
  }
  return {type: SET_FILTER, filter};
};
